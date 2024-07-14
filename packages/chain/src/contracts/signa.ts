import { runtimeModule, RuntimeModule, state, runtimeMethod } from "@proto-kit/module";
import { State, StateMap, assert } from "@proto-kit/protocol";
import { Balance, Balances as BaseBalances, TokenId, UInt64 } from "@proto-kit/library";
import { PublicKey, Provable, Field, Poseidon, Struct } from "o1js";
import { NoConfig } from "@proto-kit/common";

class GuardianGlobalMeta extends Struct({
    /**
     * how long a newly registerred guardian becomes mature
     */
    guardianMatureTs: Field,
    /**
     * how long a newly revoked guardian becomes mature
     */
    guardianRevokeTs: Field,

    /**
     * the time range from when appeal officially starts
     */
    appealTimeRange: Field,

}) { }

const GUARDIAN_GLOBAL_META = new GuardianGlobalMeta({
    guardianMatureTs: Field(0),
    guardianRevokeTs: Field(0),
    appealTimeRange: Field(0)
});

class UserGuardianConfig extends Struct({
    /**
     * user specify what's the bottom line of guardians' applications can make user's mgr acct frozen.
     */
    appealMembersAmt: Field,

}) { }

/**
 * 
 */
class GuardianInfo extends Struct({
    guardianAddr: PublicKey,
    addedTs: Field,
    revokedTs: Field
}) {
    static emptyGuardian() {
        return new GuardianInfo({
            guardianAddr: PublicKey.empty(), // TODO 这里需要看protokit中如何转换PublicKey.empty！
            addedTs: Field(0),
            revokedTs: Field(0)
        });
    }
}

class GuardianList extends Struct({
    list: Provable.Array(GuardianInfo, 5)
}) { }

/**
 * old GuardianAppeal could be overrided by guardian's new tx along with new GuardianAppeal.
 */
class GuardianAppealV2 extends Struct({
    fromMgrAddr: PublicKey,
    toMgrAddr: PublicKey,
    /**
     * if currentNetworkTs - currentTs > appealTimeRange, then this apeal becomes auto invalid and would be ignored.
     */
    startTs: Field
}) { }

/**
 * old GuardianAppeal could be overrided by guardian's new tx along with new GuardianAppeal.
 */
class GuardianAppeal extends Struct({
    toMgrAddr: PublicKey,
    /**
     * if currentNetworkTs - currentTs > appealTimeRange, then this apeal becomes auto invalid and would be ignored.
     */
    startTs: Field
}) { }

const MRGACCT_STATUS_INIT = Field(0);
const MRGACCT_STATUS_NORMAL = Field(1);
const MRGACCT_STATUS_FROZEN = Field(2);

@runtimeModule()
export class SigNaCore extends RuntimeModule<NoConfig> {
    @state() public mgrAcct2Id = StateMap.from<PublicKey, Field>(
        PublicKey,
        Field
    );
    @state() public id2MgrAcct = StateMap.from<Field, PublicKey>(
        Field,
        PublicKey
    );

    /**
     * MRGACCT_STATUS_INIT : can only registerID/RecieveFund
     * MRGACCT_STATUS_NORMAL : has all permissions
     * MRGACCT_STATUS_FROZEN : all permissions are temporarily stopped
     */
    @state() public mgrAcctStatus = StateMap.from<PublicKey, Field>(
        PublicKey,
        Field
    );

    /**
     * Key: Hash(public key), compatible with in-browser RSA key Pattern
     */
    @state() public ftlAcct2MgrAcct = StateMap.from<Field, PublicKey>(
        Field,
        PublicKey
    );

    @state() public mgrAcct2GuardianList = StateMap.from<PublicKey, GuardianList>(
        PublicKey,
        GuardianList
    );
    @state() public userGuardianConfig = StateMap.from<PublicKey, UserGuardianConfig>(
        PublicKey,
        UserGuardianConfig
    );

    /**
     * key: Hash(guardian, existingMgrAddr)
     */
    @state() public guardianAppeals = StateMap.from<Field, GuardianAppeal>(
        Field,
        GuardianAppeal
    );

    public async checkIfMgrAcctFrozen(mgrAcct: PublicKey) {
        assert((await this.mgrAcctStatus.get(mgrAcct)).isSome, 'mgr acct does not exist');
        assert((await this.mgrAcctStatus.get(mgrAcct)).value.equals(Field(1)), 'mgr acct is frozen');
    }

    public async checkIfMgrAcctExisted(mgrAcct: PublicKey) {
        assert((await this.mgrAcctStatus.get(mgrAcct)).isSome.not(), 'mgr acct has existed');
    }

    /**
     * 
     * @param idHash hash(ID)
     */
    @runtimeMethod()
    public async registerId(idHash: Field) {
        const sender = this.transaction.sender.value;
        this.checkIfMgrAcctExisted(sender);

        this.mgrAcct2Id.set(sender, idHash);
        this.id2MgrAcct.set(idHash, sender);
        this.mgrAcctStatus.set(sender, MRGACCT_STATUS_INIT);
    }

    
    @runtimeMethod()
    public async authorizeFtlAcct(fltAcct: Field) {
        const sender = this.transaction.sender.value;
        this.checkIfMgrAcctExisted(sender);

        this.ftlAcct2MgrAcct.set(fltAcct, sender);
    }

    @runtimeMethod()
    public async revokeFtlAcct(fltAcct: Field) {

    }

    @runtimeMethod()
    public async authorizeGuardians() {

    }

    @runtimeMethod()
    public async revokeGuardians() {

    }

    @runtimeMethod()
    public async appealManagerAcct() {

    }

    @runtimeMethod()
    public async migrateManagerAcct() {

    }

    @runtimeMethod()
    public async transfer(
        tokenId: TokenId,
        address: PublicKey,
        amount: Balance
    ) {

    }

    @runtimeMethod()
    public async registerEmail() {

    }

    @runtimeMethod()
    public async registerEvmAcct() {

    }
}
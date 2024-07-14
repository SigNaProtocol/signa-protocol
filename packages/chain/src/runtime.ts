import { UInt64 } from "@proto-kit/library";
import { Balances } from "./contracts/balances";
import { SigNaCore } from "./contracts/signa";
import { ModulesConfig } from "@proto-kit/common";

export const modules = {
  SigNaCore,
  Balances
};

const config: ModulesConfig<typeof modules> = {
  SigNaCore: {},
  Balances: {
    totalSupply: UInt64.from(10000),
  }
};

export default {
  modules,
  config,
};

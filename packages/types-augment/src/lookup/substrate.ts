// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<kitchensink_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup33: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup34: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup35: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup36: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup37: pallet_asset_tx_payment::pallet::Event<T>
   **/
  PalletAssetTxPaymentEvent: {
    _enum: {
      AssetTxFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128',
        assetId: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup39: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<AccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        score: 'SpNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiPhasePhase',
        to: 'PalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup40: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup43: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup44: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup46: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      ForceEra: {
        mode: 'PalletStakingForcing'
      }
    }
  },
  /**
   * Lookup48: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup50: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup51: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup52: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup53: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup54: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup56: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup57: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup59: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup62: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup63: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup66: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup67: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup68: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup69: pallet_asset_rate::pallet::Event<T>
   **/
  PalletAssetRateEvent: {
    _enum: {
      AssetRateCreated: {
        assetId: 'u32',
        rate: 'u128',
      },
      AssetRateRemoved: {
        assetId: 'u32',
      },
      AssetRateUpdated: {
        _alias: {
          new_: 'new',
        },
        assetId: 'u32',
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup71: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'AccountId32',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup72: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup73: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,PalletStakingExposure)>'
      }
    }
  },
  /**
   * Lookup74: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup75: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup78: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup81: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup82: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup84: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup85: pallet_society::pallet::Event<T, I>
   **/
  PalletSocietyEvent: {
    _enum: {
      Founded: {
        founder: 'AccountId32',
      },
      Bid: {
        candidateId: 'AccountId32',
        offer: 'u128',
      },
      Vouch: {
        candidateId: 'AccountId32',
        offer: 'u128',
        vouching: 'AccountId32',
      },
      AutoUnbid: {
        candidate: 'AccountId32',
      },
      Unbid: {
        candidate: 'AccountId32',
      },
      Unvouch: {
        candidate: 'AccountId32',
      },
      Inducted: {
        primary: 'AccountId32',
        candidates: 'Vec<AccountId32>',
      },
      SuspendedMemberJudgement: {
        who: 'AccountId32',
        judged: 'bool',
      },
      CandidateSuspended: {
        candidate: 'AccountId32',
      },
      MemberSuspended: {
        member: 'AccountId32',
      },
      Challenged: {
        member: 'AccountId32',
      },
      Vote: {
        candidate: 'AccountId32',
        voter: 'AccountId32',
        vote: 'bool',
      },
      DefenderVote: {
        voter: 'AccountId32',
        vote: 'bool',
      },
      NewMaxMembers: {
        max: 'u32',
      },
      Unfounded: {
        founder: 'AccountId32',
      },
      Deposit: {
        value: 'u128',
      },
      SkepticsChosen: {
        skeptics: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup87: pallet_recovery::pallet::Event<T>
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'AccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
        sender: 'AccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      AccountRecovered: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup88: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup89: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup92: pallet_glutton::pallet::Event
   **/
  PalletGluttonEvent: {
    _enum: {
      PalletInitialized: {
        reinit: 'bool',
      },
      ComputationLimitSet: {
        compute: 'Perbill',
      },
      StorageLimitSet: {
        storage: 'Perbill'
      }
    }
  },
  /**
   * Lookup93: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup94: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup95: kitchensink_runtime::ProxyType
   **/
  KitchensinkRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
  },
  /**
   * Lookup97: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup98: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup99: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup100: pallet_tips::pallet::Event<T, I>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup101: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'AccountId32',
        amount: 'u128',
      },
      Transferred: {
        assetId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'u32',
      },
      AssetThawed: {
        assetId: 'u32',
      },
      AccountsDestroyed: {
        assetId: 'u32',
        accountsDestroyed: 'u32',
        accountsRemaining: 'u32',
      },
      ApprovalsDestroyed: {
        assetId: 'u32',
        approvalsDestroyed: 'u32',
        approvalsRemaining: 'u32',
      },
      DestructionStarted: {
        assetId: 'u32',
      },
      Destroyed: {
        assetId: 'u32',
      },
      ForceCreated: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u32',
      },
      ApprovedTransfer: {
        assetId: 'u32',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u32',
      },
      AssetMinBalanceChanged: {
        assetId: 'u32',
        newMinBalance: 'u128'
      }
    }
  },
  /**
   * Lookup102: pallet_lottery::pallet::Event<T>
   **/
  PalletLotteryEvent: {
    _enum: {
      LotteryStarted: 'Null',
      CallsUpdated: 'Null',
      Winner: {
        winner: 'AccountId32',
        lotteryBalance: 'u128',
      },
      TicketBought: {
        who: 'AccountId32',
        callIndex: '(u8,u8)'
      }
    }
  },
  /**
   * Lookup104: pallet_nis::pallet::Event<T>
   **/
  PalletNisEvent: {
    _enum: {
      BidPlaced: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidRetracted: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidDropped: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      Issued: {
        index: 'u32',
        expiry: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
      },
      Thawed: {
        index: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
        dropped: 'bool',
      },
      Funded: {
        deficit: 'u128',
      },
      Transferred: {
        from: 'AccountId32',
        to: 'AccountId32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup106: pallet_uniques::pallet::Event<T, I>
   **/
  PalletUniquesEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        collection: 'u32',
        item: 'u32',
      },
      Thawed: {
        collection: 'u32',
        item: 'u32',
      },
      CollectionFrozen: {
        collection: 'u32',
      },
      CollectionThawed: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      ApprovedTransfer: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ItemStatusChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      MetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'AccountId32',
        buyer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup111: pallet_nfts::pallet::Event<T, I>
   **/
  PalletNftsEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      ItemTransferLocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemTransferUnlocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemPropertiesLocked: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      CollectionLocked: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'Option<AccountId32>',
        admin: 'Option<AccountId32>',
        freezer: 'Option<AccountId32>',
      },
      TransferApproved: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        deadline: 'Option<u32>',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      AllApprovalsCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      CollectionConfigChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      ItemMetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      ItemMetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
        namespace: 'PalletNftsAttributeNamespace',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        namespace: 'PalletNftsAttributeNamespace',
      },
      ItemAttributesApprovalAdded: {
        collection: 'u32',
        item: 'u32',
        delegate: 'AccountId32',
      },
      ItemAttributesApprovalRemoved: {
        collection: 'u32',
        item: 'u32',
        delegate: 'AccountId32',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      CollectionMintSettingsUpdated: {
        collection: 'u32',
      },
      NextCollectionIdIncremented: {
        nextId: 'u32',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'AccountId32',
        buyer: 'AccountId32',
      },
      TipSent: {
        collection: 'u32',
        item: 'u32',
        sender: 'AccountId32',
        receiver: 'AccountId32',
        amount: 'u128',
      },
      SwapCreated: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapCancelled: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapClaimed: {
        sentCollection: 'u32',
        sentItem: 'u32',
        sentItemOwner: 'AccountId32',
        receivedCollection: 'u32',
        receivedItem: 'u32',
        receivedItemOwner: 'AccountId32',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      PreSignedAttributesSet: {
        collection: 'u32',
        item: 'u32',
        namespace: 'PalletNftsAttributeNamespace',
      },
      PalletAttributeSet: {
        collection: 'u32',
        item: 'Option<u32>',
        attribute: 'PalletNftsPalletAttributes',
        value: 'Bytes'
      }
    }
  },
  /**
   * Lookup112: pallet_nfts::types::AttributeNamespace<sp_core::crypto::AccountId32>
   **/
  PalletNftsAttributeNamespace: {
    _enum: {
      Pallet: 'Null',
      CollectionOwner: 'Null',
      ItemOwner: 'Null',
      Account: 'AccountId32'
    }
  },
  /**
   * Lookup114: pallet_nfts::types::PriceWithDirection<Amount>
   **/
  PalletNftsPriceWithDirection: {
    amount: 'u128',
    direction: 'PalletNftsPriceDirection'
  },
  /**
   * Lookup115: pallet_nfts::types::PriceDirection
   **/
  PalletNftsPriceDirection: {
    _enum: ['Send', 'Receive']
  },
  /**
   * Lookup116: pallet_nfts::types::PalletAttributes<CollectionId>
   **/
  PalletNftsPalletAttributes: {
    _enum: {
      UsedToClaim: 'u32'
    }
  },
  /**
   * Lookup117: pallet_salary::pallet::Event<T, I>
   **/
  PalletSalaryEvent: {
    _enum: {
      Inducted: {
        who: 'AccountId32',
      },
      Registered: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Paid: {
        who: 'AccountId32',
        beneficiary: 'AccountId32',
        amount: 'u128',
        id: 'Null',
      },
      CycleStarted: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup118: pallet_core_fellowship::pallet::Event<T, I>
   **/
  PalletCoreFellowshipEvent: {
    _enum: {
      ParamsChanged: {
        params: 'PalletCoreFellowshipParamsType',
      },
      ActiveChanged: {
        who: 'AccountId32',
        isActive: 'bool',
      },
      Inducted: {
        who: 'AccountId32',
      },
      Offboarded: {
        who: 'AccountId32',
      },
      Promoted: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      Demoted: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      Proven: {
        who: 'AccountId32',
        atRank: 'u16',
      },
      Requested: {
        who: 'AccountId32',
        wish: 'PalletCoreFellowshipWish',
      },
      EvidenceJudged: {
        who: 'AccountId32',
        wish: 'PalletCoreFellowshipWish',
        evidence: 'Bytes',
        oldRank: 'u16',
        newRank: 'Option<u16>',
      },
      Imported: {
        who: 'AccountId32',
        rank: 'u16'
      }
    }
  },
  /**
   * Lookup119: pallet_core_fellowship::ParamsType<Balance, BlockNumber>
   **/
  PalletCoreFellowshipParamsType: {
    activeSalary: '[u128;9]',
    passiveSalary: '[u128;9]',
    demotionPeriod: '[u32;9]',
    minPromotionPeriod: '[u32;9]',
    offboardTimeout: 'u32'
  },
  /**
   * Lookup122: pallet_core_fellowship::Wish
   **/
  PalletCoreFellowshipWish: {
    _enum: ['Retention', 'Promotion']
  },
  /**
   * Lookup125: pallet_transaction_storage::pallet::Event<T>
   **/
  PalletTransactionStorageEvent: {
    _enum: {
      Stored: {
        index: 'u32',
      },
      Renewed: {
        index: 'u32',
      },
      ProofChecked: 'Null'
    }
  },
  /**
   * Lookup126: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup127: pallet_state_trie_migration::pallet::Event<T>
   **/
  PalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: 'u32',
        child: 'u32',
        compute: 'PalletStateTrieMigrationMigrationCompute',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      AutoMigrationFinished: 'Null',
      Halted: {
        error: 'PalletStateTrieMigrationError'
      }
    }
  },
  /**
   * Lookup128: pallet_state_trie_migration::pallet::MigrationCompute
   **/
  PalletStateTrieMigrationMigrationCompute: {
    _enum: ['Signed', 'Auto']
  },
  /**
   * Lookup129: pallet_state_trie_migration::pallet::Error<T>
   **/
  PalletStateTrieMigrationError: {
    _enum: ['MaxSignedLimits', 'KeyTooLong', 'NotEnoughFunds', 'BadWitness', 'SignedMigrationNotAllowed', 'BadChildRoot']
  },
  /**
   * Lookup130: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup131: pallet_referenda::pallet::Event<T, I>
   **/
  PalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
        tally: 'PalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup132: frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup134: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup138: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'KitchensinkRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup140: kitchensink_runtime::OriginCaller
   **/
  KitchensinkRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      AllianceMotion: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup141: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup142: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup145: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup146: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup147: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup148: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup149: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup151: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup153: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup154: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup156: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup157: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup158: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup161: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup162: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup163: pallet_election_provider_multi_phase::RawSolution<kitchensink_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'KitchensinkRuntimeNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup164: kitchensink_runtime::NposSolution16
   **/
  KitchensinkRuntimeNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup215: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup219: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup220: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        controller: 'MultiAddress',
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: {
        controller: 'MultiAddress',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill'
      }
    }
  },
  /**
   * Lookup221: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup224: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup225: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup226: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup227: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup228: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'KitchensinkRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup229: kitchensink_runtime::SessionKeys
   **/
  KitchensinkRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup230: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup231: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup232: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup234: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup236: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup237: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup238: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup239: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup240: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup241: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup242: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup243: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup244: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup245: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup248: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup249: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup251: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup252: pallet_asset_rate::pallet::Call<T>
   **/
  PalletAssetRateCall: {
    _enum: {
      create: {
        assetId: 'u32',
        rate: 'u128',
      },
      update: {
        assetId: 'u32',
        rate: 'u128',
      },
      remove: {
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup253: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes'
      }
    }
  },
  /**
   * Lookup255: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Enforced', 'Relaxed']
  },
  /**
   * Lookup256: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup257: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup258: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup259: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'OpaquePeerId',
    externalAddresses: 'Vec<OpaqueMultiaddr>'
  },
  /**
   * Lookup263: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup264: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup265: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup266: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup303: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup304: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup305: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup306: pallet_society::pallet::Call<T, I>
   **/
  PalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: {
        pos: 'u32',
      },
      vouch: {
        who: 'MultiAddress',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: {
        pos: 'u32',
      },
      vote: {
        candidate: 'MultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      found: {
        founder: 'MultiAddress',
        maxMembers: 'u32',
        rules: 'Bytes',
      },
      unfound: 'Null',
      judge_suspended_member: {
        who: 'MultiAddress',
        forgive: 'bool',
      },
      judge_suspended_candidate: {
        who: 'MultiAddress',
        judgement: 'PalletSocietyJudgement',
      },
      set_max_members: {
        max: 'u32'
      }
    }
  },
  /**
   * Lookup307: pallet_society::Judgement
   **/
  PalletSocietyJudgement: {
    _enum: ['Rebid', 'Reject', 'Approve']
  },
  /**
   * Lookup308: pallet_recovery::pallet::Call<T>
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'MultiAddress',
        call: 'Call',
      },
      set_recovered: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      create_recovery: {
        friends: 'Vec<AccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'MultiAddress',
      },
      vouch_recovery: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      claim_recovery: {
        account: 'MultiAddress',
      },
      close_recovery: {
        rescuer: 'MultiAddress',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup309: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup310: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup311: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup313: pallet_glutton::pallet::Call<T>
   **/
  PalletGluttonCall: {
    _enum: {
      initialize_pallet: {
        newCount: 'u32',
        witnessCount: 'Option<u32>',
      },
      set_compute: {
        compute: 'Perbill',
      },
      set_storage: {
        storage: 'Perbill'
      }
    }
  },
  /**
   * Lookup314: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup315: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup317: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup319: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup320: pallet_tips::pallet::Call<T, I>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'MultiAddress',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'MultiAddress',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup321: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u32>',
        admin: 'MultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      start_destroy: {
        id: 'Compact<u32>',
      },
      destroy_accounts: {
        id: 'Compact<u32>',
      },
      destroy_approvals: {
        id: 'Compact<u32>',
      },
      finish_destroy: {
        id: 'Compact<u32>',
      },
      mint: {
        id: 'Compact<u32>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u32>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u32>',
      },
      thaw_asset: {
        id: 'Compact<u32>',
      },
      transfer_ownership: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u32>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u32>',
      },
      force_set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u32>',
      },
      force_asset_status: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u32>',
      },
      refund: {
        id: 'Compact<u32>',
        allowBurn: 'bool',
      },
      set_min_balance: {
        id: 'Compact<u32>',
        minBalance: 'u128'
      }
    }
  },
  /**
   * Lookup322: pallet_lottery::pallet::Call<T>
   **/
  PalletLotteryCall: {
    _enum: {
      buy_ticket: {
        call: 'Call',
      },
      set_calls: {
        calls: 'Vec<Call>',
      },
      start_lottery: {
        price: 'u128',
        length: 'u32',
        delay: 'u32',
        repeat: 'bool',
      },
      stop_repeat: 'Null'
    }
  },
  /**
   * Lookup323: pallet_nis::pallet::Call<T>
   **/
  PalletNisCall: {
    _enum: {
      place_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      retract_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      fund_deficit: 'Null',
      thaw_private: {
        index: 'Compact<u32>',
        maybeProportion: 'Option<Perquintill>',
      },
      thaw_communal: {
        index: 'Compact<u32>',
      },
      communify: {
        index: 'Compact<u32>',
      },
      privatize: {
        index: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup325: pallet_uniques::pallet::Call<T, I>
   **/
  PalletUniquesCall: {
    _enum: {
      create: {
        collection: 'u32',
        admin: 'MultiAddress',
      },
      force_create: {
        collection: 'u32',
        owner: 'MultiAddress',
        freeHolding: 'bool',
      },
      destroy: {
        collection: 'u32',
        witness: 'PalletUniquesDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        owner: 'MultiAddress',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
        checkOwner: 'Option<MultiAddress>',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'MultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      freeze: {
        collection: 'u32',
        item: 'u32',
      },
      thaw: {
        collection: 'u32',
        item: 'u32',
      },
      freeze_collection: {
        collection: 'u32',
      },
      thaw_collection: {
        collection: 'u32',
      },
      transfer_ownership: {
        collection: 'u32',
        owner: 'MultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        maybeCheckDelegate: 'Option<MultiAddress>',
      },
      force_item_status: {
        collection: 'u32',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        freeHolding: 'bool',
        isFrozen: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<MultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128'
      }
    }
  },
  /**
   * Lookup326: pallet_uniques::types::DestroyWitness
   **/
  PalletUniquesDestroyWitness: {
    items: 'Compact<u32>',
    itemMetadatas: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup329: pallet_nfts::pallet::Call<T, I>
   **/
  PalletNftsCall: {
    _enum: {
      create: {
        admin: 'MultiAddress',
        config: 'PalletNftsCollectionConfig',
      },
      force_create: {
        owner: 'MultiAddress',
        config: 'PalletNftsCollectionConfig',
      },
      destroy: {
        collection: 'u32',
        witness: 'PalletNftsDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'MultiAddress',
        witnessData: 'Option<PalletNftsMintWitness>',
      },
      force_mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'MultiAddress',
        itemConfig: 'PalletNftsItemConfig',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'MultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      lock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      unlock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      lock_collection: {
        collection: 'u32',
        lockSettings: 'u64',
      },
      transfer_ownership: {
        collection: 'u32',
        owner: 'MultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'Option<MultiAddress>',
        admin: 'Option<MultiAddress>',
        freezer: 'Option<MultiAddress>',
      },
      force_collection_owner: {
        collection: 'u32',
        owner: 'MultiAddress',
      },
      force_collection_config: {
        collection: 'u32',
        config: 'PalletNftsCollectionConfig',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
        maybeDeadline: 'Option<u32>',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      clear_all_transfer_approvals: {
        collection: 'u32',
        item: 'u32',
      },
      lock_item_properties: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      force_set_attribute: {
        setAs: 'Option<AccountId32>',
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
      },
      approve_item_attributes: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      cancel_item_attributes_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
        witness: 'PalletNftsCancelAttributesApprovalWitness',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      update_mint_settings: {
        collection: 'u32',
        mintSettings: 'PalletNftsMintSettings',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<MultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128',
      },
      pay_tips: {
        tips: 'Vec<PalletNftsItemTip>',
      },
      create_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        maybeDesiredItem: 'Option<u32>',
        maybePrice: 'Option<PalletNftsPriceWithDirection>',
        duration: 'u32',
      },
      cancel_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
      },
      claim_swap: {
        sendCollection: 'u32',
        sendItem: 'u32',
        receiveCollection: 'u32',
        receiveItem: 'u32',
        witnessPrice: 'Option<PalletNftsPriceWithDirection>',
      },
      mint_pre_signed: {
        mintData: 'PalletNftsPreSignedMint',
        signature: 'SpRuntimeMultiSignature',
        signer: 'AccountId32',
      },
      set_attributes_pre_signed: {
        data: 'PalletNftsPreSignedAttributes',
        signature: 'SpRuntimeMultiSignature',
        signer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup330: pallet_nfts::types::CollectionConfig<Price, BlockNumber, CollectionId>
   **/
  PalletNftsCollectionConfig: {
    settings: 'u64',
    maxSupply: 'Option<u32>',
    mintSettings: 'PalletNftsMintSettings'
  },
  /**
   * Lookup332: pallet_nfts::types::CollectionSetting
   **/
  PalletNftsCollectionSetting: {
    _enum: ['__Unused0', 'TransferableItems', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes', '__Unused5', '__Unused6', '__Unused7', 'UnlockedMaxSupply', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'DepositRequired']
  },
  /**
   * Lookup333: pallet_nfts::types::MintSettings<Price, BlockNumber, CollectionId>
   **/
  PalletNftsMintSettings: {
    mintType: 'PalletNftsMintType',
    price: 'Option<u128>',
    startBlock: 'Option<u32>',
    endBlock: 'Option<u32>',
    defaultItemSettings: 'u64'
  },
  /**
   * Lookup334: pallet_nfts::types::MintType<CollectionId>
   **/
  PalletNftsMintType: {
    _enum: {
      Issuer: 'Null',
      Public: 'Null',
      HolderOf: 'u32'
    }
  },
  /**
   * Lookup336: pallet_nfts::types::ItemSetting
   **/
  PalletNftsItemSetting: {
    _enum: ['__Unused0', 'Transferable', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes']
  },
  /**
   * Lookup337: pallet_nfts::types::DestroyWitness
   **/
  PalletNftsDestroyWitness: {
    itemMetadatas: 'Compact<u32>',
    itemConfigs: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup339: pallet_nfts::types::MintWitness<ItemId>
   **/
  PalletNftsMintWitness: {
    ownedItem: 'u32'
  },
  /**
   * Lookup340: pallet_nfts::types::ItemConfig
   **/
  PalletNftsItemConfig: {
    settings: 'u64'
  },
  /**
   * Lookup341: pallet_nfts::types::CancelAttributesApprovalWitness
   **/
  PalletNftsCancelAttributesApprovalWitness: {
    accountAttributes: 'u32'
  },
  /**
   * Lookup343: pallet_nfts::types::ItemTip<CollectionId, ItemId, sp_core::crypto::AccountId32, Amount>
   **/
  PalletNftsItemTip: {
    collection: 'u32',
    item: 'u32',
    receiver: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup345: pallet_nfts::types::PreSignedMint<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline>
   **/
  PalletNftsPreSignedMint: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    metadata: 'Bytes',
    onlyAccount: 'Option<AccountId32>',
    deadline: 'u32'
  },
  /**
   * Lookup346: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup347: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup349: pallet_nfts::types::PreSignedAttributes<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline>
   **/
  PalletNftsPreSignedAttributes: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    namespace: 'PalletNftsAttributeNamespace',
    deadline: 'u32'
  },
  /**
   * Lookup350: pallet_salary::pallet::Call<T, I>
   **/
  PalletSalaryCall: {
    _enum: {
      init: 'Null',
      bump: 'Null',
      induct: 'Null',
      register: 'Null',
      payout: 'Null',
      payout_other: {
        beneficiary: 'AccountId32',
      },
      check_payment: 'Null'
    }
  },
  /**
   * Lookup351: pallet_core_fellowship::pallet::Call<T, I>
   **/
  PalletCoreFellowshipCall: {
    _enum: {
      bump: {
        who: 'AccountId32',
      },
      set_params: {
        params: 'PalletCoreFellowshipParamsType',
      },
      set_active: {
        isActive: 'bool',
      },
      approve: {
        who: 'AccountId32',
        atRank: 'u16',
      },
      induct: {
        who: 'AccountId32',
      },
      promote: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      offboard: {
        who: 'AccountId32',
      },
      submit_evidence: {
        wish: 'PalletCoreFellowshipWish',
        evidence: 'Bytes',
      },
      import: 'Null'
    }
  },
  /**
   * Lookup352: pallet_transaction_storage::pallet::Call<T>
   **/
  PalletTransactionStorageCall: {
    _enum: {
      store: {
        data: 'Bytes',
      },
      renew: {
        block: 'u32',
        index: 'u32',
      },
      check_proof: {
        proof: 'SpTransactionStorageProofTransactionStorageProof'
      }
    }
  },
  /**
   * Lookup353: sp_transaction_storage_proof::TransactionStorageProof
   **/
  SpTransactionStorageProofTransactionStorageProof: {
    chunk: 'Bytes',
    proof: 'Vec<Bytes>'
  },
  /**
   * Lookup354: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'MultiAddress',
      },
      put_in_front_of: {
        lighter: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup355: pallet_state_trie_migration::pallet::Call<T>
   **/
  PalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: 'Option<PalletStateTrieMigrationMigrationLimits>',
      },
      continue_migrate: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
        realSizeUpper: 'u32',
        witnessTask: 'PalletStateTrieMigrationMigrationTask',
      },
      migrate_custom_top: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
        witnessSize: 'u32',
      },
      migrate_custom_child: {
        root: 'Bytes',
        childKeys: 'Vec<Bytes>',
        totalSize: 'u32',
      },
      set_signed_max_limits: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
      },
      force_set_progress: {
        progressTop: 'PalletStateTrieMigrationProgress',
        progressChild: 'PalletStateTrieMigrationProgress'
      }
    }
  },
  /**
   * Lookup357: pallet_state_trie_migration::pallet::MigrationLimits
   **/
  PalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: 'size'
    },
    size_: 'u32',
    item: 'u32'
  },
  /**
   * Lookup358: pallet_state_trie_migration::pallet::MigrationTask<T>
   **/
  PalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: 'size'
    },
    progressTop: 'PalletStateTrieMigrationProgress',
    progressChild: 'PalletStateTrieMigrationProgress',
    size_: 'u32',
    topItems: 'u32',
    childItems: 'u32'
  },
  /**
   * Lookup359: pallet_state_trie_migration::pallet::Progress<MaxKeyLen>
   **/
  PalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: 'Null',
      LastKey: 'Bytes',
      Complete: 'Null'
    }
  },
  /**
   * Lookup361: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup362: pallet_referenda::pallet::Call<T, I>
   **/
  PalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'KitchensinkRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactmentMoment: 'FrameSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup363: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup364: pallet_remark::pallet::Call<T>
   **/
  PalletRemarkCall: {
    _enum: {
      store: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup365: pallet_root_testing::pallet::Call<T>
   **/
  PalletRootTestingCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill'
      }
    }
  },
  /**
   * Lookup366: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'MultiAddress',
        conviction: 'PalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'MultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup367: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup369: pallet_conviction_voting::conviction::Conviction
   **/
  PalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup370: pallet_whitelist::pallet::Call<T>
   **/
  PalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'SpWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup372: pallet_alliance::pallet::Call<T, I>
   **/
  PalletAllianceCall: {
    _enum: {
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused2: 'Null',
      init_members: {
        fellows: 'Vec<AccountId32>',
        allies: 'Vec<AccountId32>',
      },
      disband: {
        witness: 'PalletAllianceDisbandWitness',
      },
      set_rule: {
        rule: 'PalletAllianceCid',
      },
      announce: {
        announcement: 'PalletAllianceCid',
      },
      remove_announcement: {
        announcement: 'PalletAllianceCid',
      },
      join_alliance: 'Null',
      nominate_ally: {
        who: 'MultiAddress',
      },
      elevate_ally: {
        ally: 'MultiAddress',
      },
      give_retirement_notice: 'Null',
      retire: 'Null',
      kick_member: {
        who: 'MultiAddress',
      },
      add_unscrupulous_items: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      remove_unscrupulous_items: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      abdicate_fellow_status: 'Null'
    }
  },
  /**
   * Lookup373: pallet_alliance::types::DisbandWitness
   **/
  PalletAllianceDisbandWitness: {
    fellowMembers: 'Compact<u32>',
    allyMembers: 'Compact<u32>'
  },
  /**
   * Lookup374: pallet_alliance::types::Cid
   **/
  PalletAllianceCid: {
    _alias: {
      hash_: 'hash'
    },
    version: 'PalletAllianceVersion',
    codec: 'u64',
    hash_: 'PalletAllianceMultihash'
  },
  /**
   * Lookup375: pallet_alliance::types::Version
   **/
  PalletAllianceVersion: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup376: pallet_alliance::types::Multihash
   **/
  PalletAllianceMultihash: {
    code: 'u64',
    digest: 'Bytes'
  },
  /**
   * Lookup379: pallet_alliance::UnscrupulousItem<sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAllianceUnscrupulousItem: {
    _enum: {
      AccountId: 'AccountId32',
      Website: 'Bytes'
    }
  },
  /**
   * Lookup381: pallet_nomination_pools::pallet::Call<T>
   **/
  PalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'MultiAddress',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'MultiAddress',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
      },
      create_with_pool_id: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
        poolId: 'u32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<AccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PalletNominationPoolsConfigOpU128',
        minCreateBond: 'PalletNominationPoolsConfigOpU128',
        maxPools: 'PalletNominationPoolsConfigOpU32',
        maxMembers: 'PalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PalletNominationPoolsConfigOpU32',
        globalMaxCommission: 'PalletNominationPoolsConfigOpPerbill',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PalletNominationPoolsConfigOpAccountId32',
        newBouncer: 'PalletNominationPoolsConfigOpAccountId32',
      },
      chill: {
        poolId: 'u32',
      },
      bond_extra_other: {
        member: 'MultiAddress',
        extra: 'PalletNominationPoolsBondExtra',
      },
      set_claim_permission: {
        permission: 'PalletNominationPoolsClaimPermission',
      },
      claim_payout_other: {
        other: 'AccountId32',
      },
      set_commission: {
        poolId: 'u32',
        newCommission: 'Option<(Perbill,AccountId32)>',
      },
      set_commission_max: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      set_commission_change_rate: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      claim_commission: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup382: pallet_nomination_pools::BondExtra<Balance>
   **/
  PalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup383: pallet_nomination_pools::PoolState
   **/
  PalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup384: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup385: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup386: pallet_nomination_pools::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletNominationPoolsConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup387: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'AccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup388: pallet_nomination_pools::ClaimPermission
   **/
  PalletNominationPoolsClaimPermission: {
    _enum: ['Permissioned', 'PermissionlessCompound', 'PermissionlessWithdraw', 'PermissionlessAll']
  },
  /**
   * Lookup391: pallet_nomination_pools::CommissionChangeRate<BlockNumber>
   **/
  PalletNominationPoolsCommissionChangeRate: {
    maxIncrease: 'Perbill',
    minDelay: 'u32'
  },
  /**
   * Lookup393: pallet_ranked_collective::pallet::Call<T, I>
   **/
  PalletRankedCollectiveCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      promote_member: {
        who: 'MultiAddress',
      },
      demote_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
        minRank: 'u16',
      },
      vote: {
        poll: 'u32',
        aye: 'bool',
      },
      cleanup_poll: {
        pollIndex: 'u32',
        max: 'u32'
      }
    }
  },
  /**
   * Lookup394: pallet_fast_unstake::pallet::Call<T>
   **/
  PalletFastUnstakeCall: {
    _enum: {
      register_fast_unstake: 'Null',
      deregister: 'Null',
      control: {
        erasToCheck: 'u32'
      }
    }
  },
  /**
   * Lookup395: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'u32',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'u32',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup396: frame_benchmarking_pallet_pov::pallet::Call<T>
   **/
  FrameBenchmarkingPalletPovCall: {
    _enum: ['emit_event', 'noop']
  },
  /**
   * Lookup398: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup399: pallet_remark::pallet::Event<T>
   **/
  PalletRemarkEvent: {
    _enum: {
      Stored: {
        sender: 'AccountId32',
        contentHash: 'H256'
      }
    }
  },
  /**
   * Lookup400: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(AccountId32,AccountId32)',
      Undelegated: 'AccountId32'
    }
  },
  /**
   * Lookup401: pallet_whitelist::pallet::Event<T>
   **/
  PalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup403: frame_support::dispatch::PostDispatchInfo
   **/
  FrameSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<SpWeightsWeightV2Weight>',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup405: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  SpRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'FrameSupportDispatchPostDispatchInfo',
    error: 'SpRuntimeDispatchError'
  },
  /**
   * Lookup407: pallet_alliance::pallet::Event<T, I>
   **/
  PalletAllianceEvent: {
    _enum: {
      NewRuleSet: {
        rule: 'PalletAllianceCid',
      },
      Announced: {
        announcement: 'PalletAllianceCid',
      },
      AnnouncementRemoved: {
        announcement: 'PalletAllianceCid',
      },
      MembersInitialized: {
        fellows: 'Vec<AccountId32>',
        allies: 'Vec<AccountId32>',
      },
      NewAllyJoined: {
        ally: 'AccountId32',
        nominator: 'Option<AccountId32>',
        reserved: 'Option<u128>',
      },
      AllyElevated: {
        ally: 'AccountId32',
      },
      MemberRetirementPeriodStarted: {
        member: 'AccountId32',
      },
      MemberRetired: {
        member: 'AccountId32',
        unreserved: 'Option<u128>',
      },
      MemberKicked: {
        member: 'AccountId32',
        slashed: 'Option<u128>',
      },
      UnscrupulousItemAdded: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      UnscrupulousItemRemoved: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      AllianceDisbanded: {
        fellowMembers: 'u32',
        allyMembers: 'u32',
        unreserved: 'u32',
      },
      FellowAbdicated: {
        fellow: 'AccountId32'
      }
    }
  },
  /**
   * Lookup408: pallet_nomination_pools::pallet::Event<T>
   **/
  PalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'AccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'AccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'AccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
        era: 'u32',
      },
      Withdrawn: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'AccountId32',
      },
      RolesUpdated: {
        root: 'Option<AccountId32>',
        bouncer: 'Option<AccountId32>',
        nominator: 'Option<AccountId32>',
      },
      PoolSlashed: {
        poolId: 'u32',
        balance: 'u128',
      },
      UnbondingPoolSlashed: {
        poolId: 'u32',
        era: 'u32',
        balance: 'u128',
      },
      PoolCommissionUpdated: {
        poolId: 'u32',
        current: 'Option<(Perbill,AccountId32)>',
      },
      PoolMaxCommissionUpdated: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      PoolCommissionChangeRateUpdated: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      PoolCommissionClaimed: {
        poolId: 'u32',
        commission: 'u128'
      }
    }
  },
  /**
   * Lookup410: pallet_ranked_collective::Tally<T, I, M>
   **/
  PalletRankedCollectiveTally: {
    bareAyes: 'u32',
    ayes: 'u32',
    nays: 'u32'
  },
  /**
   * Lookup411: pallet_ranked_collective::pallet::Event<T, I>
   **/
  PalletRankedCollectiveEvent: {
    _enum: {
      MemberAdded: {
        who: 'AccountId32',
      },
      RankChanged: {
        who: 'AccountId32',
        rank: 'u16',
      },
      MemberRemoved: {
        who: 'AccountId32',
        rank: 'u16',
      },
      Voted: {
        who: 'AccountId32',
        poll: 'u32',
        vote: 'PalletRankedCollectiveVoteRecord',
        tally: 'PalletRankedCollectiveTally'
      }
    }
  },
  /**
   * Lookup412: pallet_ranked_collective::VoteRecord
   **/
  PalletRankedCollectiveVoteRecord: {
    _enum: {
      Aye: 'u32',
      Nay: 'u32'
    }
  },
  /**
   * Lookup413: pallet_fast_unstake::pallet::Event<T>
   **/
  PalletFastUnstakeEvent: {
    _enum: {
      Unstaked: {
        stash: 'AccountId32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Slashed: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      InternalError: 'Null',
      BatchChecked: {
        eras: 'Vec<u32>',
      },
      BatchFinished: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32'
      }
    }
  },
  /**
   * Lookup414: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      Discarded: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ProcessingFailed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'u32',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'u32',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'u32',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'u32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup415: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null'
    }
  },
  /**
   * Lookup416: frame_benchmarking_pallet_pov::pallet::Event<T>
   **/
  FrameBenchmarkingPalletPovEvent: {
    _enum: ['TestEvent']
  },
  /**
   * Lookup417: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup420: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup422: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup423: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup424: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup425: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup426: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup427: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup428: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup432: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup433: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup440: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup441: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup442: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    output: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup443: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup444: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup445: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup449: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup451: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup453: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup454: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup457: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup461: kitchensink_runtime::HoldReason
   **/
  KitchensinkRuntimeHoldReason: {
    _enum: ['Nis']
  },
  /**
   * Lookup464: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup466: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup467: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup468: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup470: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32, DataProvider>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup477: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, kitchensink_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup478: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners']
  },
  /**
   * Lookup479: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup481: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup484: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup485: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup488: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup493: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup495: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup496: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup499: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet']
  },
  /**
   * Lookup503: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup504: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup510: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup511: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup512: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup513: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup517: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup518: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup521: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup523: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup524: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup528: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup529: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup530: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup532: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup533: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup534: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup536: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup537: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup540: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup541: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup542: pallet_asset_rate::pallet::Error<T>
   **/
  PalletAssetRateError: {
    _enum: ['UnknownAssetId', 'AlreadyExists']
  },
  /**
   * Lookup544: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup546: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup547: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    depositAccount: 'AccountId32',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup549: pallet_contracts::storage::DeletionQueueManager<T>
   **/
  PalletContractsStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup550: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup551: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    globals: 'u32',
    locals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32'
  },
  /**
   * Lookup552: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    fallback: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callPerLocal: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup553: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'SpWeightsWeightV2Weight',
    isContract: 'SpWeightsWeightV2Weight',
    codeHash: 'SpWeightsWeightV2Weight',
    ownCodeHash: 'SpWeightsWeightV2Weight',
    callerIsOrigin: 'SpWeightsWeightV2Weight',
    address: 'SpWeightsWeightV2Weight',
    gasLeft: 'SpWeightsWeightV2Weight',
    balance: 'SpWeightsWeightV2Weight',
    valueTransferred: 'SpWeightsWeightV2Weight',
    minimumBalance: 'SpWeightsWeightV2Weight',
    blockNumber: 'SpWeightsWeightV2Weight',
    now: 'SpWeightsWeightV2Weight',
    weightToFee: 'SpWeightsWeightV2Weight',
    gas: 'SpWeightsWeightV2Weight',
    input: 'SpWeightsWeightV2Weight',
    inputPerByte: 'SpWeightsWeightV2Weight',
    r_return: 'SpWeightsWeightV2Weight',
    returnPerByte: 'SpWeightsWeightV2Weight',
    terminate: 'SpWeightsWeightV2Weight',
    random: 'SpWeightsWeightV2Weight',
    depositEvent: 'SpWeightsWeightV2Weight',
    depositEventPerTopic: 'SpWeightsWeightV2Weight',
    depositEventPerByte: 'SpWeightsWeightV2Weight',
    debugMessage: 'SpWeightsWeightV2Weight',
    debugMessagePerByte: 'SpWeightsWeightV2Weight',
    setStorage: 'SpWeightsWeightV2Weight',
    setStoragePerNewByte: 'SpWeightsWeightV2Weight',
    setStoragePerOldByte: 'SpWeightsWeightV2Weight',
    setCodeHash: 'SpWeightsWeightV2Weight',
    clearStorage: 'SpWeightsWeightV2Weight',
    clearStoragePerByte: 'SpWeightsWeightV2Weight',
    containsStorage: 'SpWeightsWeightV2Weight',
    containsStoragePerByte: 'SpWeightsWeightV2Weight',
    getStorage: 'SpWeightsWeightV2Weight',
    getStoragePerByte: 'SpWeightsWeightV2Weight',
    takeStorage: 'SpWeightsWeightV2Weight',
    takeStoragePerByte: 'SpWeightsWeightV2Weight',
    transfer: 'SpWeightsWeightV2Weight',
    call: 'SpWeightsWeightV2Weight',
    delegateCall: 'SpWeightsWeightV2Weight',
    callTransferSurcharge: 'SpWeightsWeightV2Weight',
    callPerClonedByte: 'SpWeightsWeightV2Weight',
    instantiate: 'SpWeightsWeightV2Weight',
    instantiateTransferSurcharge: 'SpWeightsWeightV2Weight',
    instantiatePerInputByte: 'SpWeightsWeightV2Weight',
    instantiatePerSaltByte: 'SpWeightsWeightV2Weight',
    hashSha2256: 'SpWeightsWeightV2Weight',
    hashSha2256PerByte: 'SpWeightsWeightV2Weight',
    hashKeccak256: 'SpWeightsWeightV2Weight',
    hashKeccak256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2256: 'SpWeightsWeightV2Weight',
    hashBlake2256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2128: 'SpWeightsWeightV2Weight',
    hashBlake2128PerByte: 'SpWeightsWeightV2Weight',
    ecdsaRecover: 'SpWeightsWeightV2Weight',
    ecdsaToEthAddress: 'SpWeightsWeightV2Weight',
    sr25519Verify: 'SpWeightsWeightV2Weight',
    sr25519VerifyPerByte: 'SpWeightsWeightV2Weight',
    reentranceCount: 'SpWeightsWeightV2Weight',
    accountReentranceCount: 'SpWeightsWeightV2Weight',
    instantiationNonce: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup554: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup555: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup559: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup563: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup566: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup569: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup577: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup579: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup581: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup582: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup584: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup588: pallet_society::Vote
   **/
  PalletSocietyVote: {
    _enum: ['Skeptic', 'Reject', 'Approve']
  },
  /**
   * Lookup589: pallet_society::pallet::Error<T, I>
   **/
  PalletSocietyError: {
    _enum: ['BadPosition', 'NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouching', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead']
  },
  /**
   * Lookup590: pallet_recovery::RecoveryConfig<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup592: pallet_recovery::ActiveRecovery<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup593: pallet_recovery::pallet::Error<T>
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup596: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup597: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup600: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, BlockNumber, kitchensink_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'KitchensinkRuntimeOriginCaller'
  },
  /**
   * Lookup602: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup604: pallet_glutton::pallet::Error<T>
   **/
  PalletGluttonError: {
    _enum: ['AlreadyInitialized']
  },
  /**
   * Lookup605: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup609: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup612: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kitchensink_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'KitchensinkRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup616: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup618: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup620: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup621: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup622: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup623: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup625: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup626: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup627: pallet_tips::pallet::Error<T, I>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup628: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    status: 'PalletAssetsAssetStatus'
  },
  /**
   * Lookup629: pallet_assets::types::AssetStatus
   **/
  PalletAssetsAssetStatus: {
    _enum: ['Live', 'Frozen', 'Destroying']
  },
  /**
   * Lookup630: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    isFrozen: 'bool',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup631: pallet_assets::types::ExistenceReason<Balance>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null'
    }
  },
  /**
   * Lookup633: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup634: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup635: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'UnavailableConsumer', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'LiveAsset', 'AssetNotLive', 'IncorrectStatus', 'NotFrozen', 'CallbackFailed']
  },
  /**
   * Lookup636: pallet_lottery::LotteryConfig<BlockNumber, Balance>
   **/
  PalletLotteryLotteryConfig: {
    price: 'u128',
    start: 'u32',
    length: 'u32',
    delay: 'u32',
    repeat: 'bool'
  },
  /**
   * Lookup640: pallet_lottery::pallet::Error<T>
   **/
  PalletLotteryError: {
    _enum: ['NotConfigured', 'InProgress', 'AlreadyEnded', 'InvalidCall', 'AlreadyParticipating', 'TooManyCalls', 'EncodingFailed']
  },
  /**
   * Lookup643: pallet_nis::pallet::Bid<Balance, sp_core::crypto::AccountId32>
   **/
  PalletNisBid: {
    amount: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup645: pallet_nis::pallet::SummaryRecord<BlockNumber, Balance>
   **/
  PalletNisSummaryRecord: {
    proportionOwed: 'Perquintill',
    index: 'u32',
    thawed: 'Perquintill',
    lastPeriod: 'u32',
    receiptsOnHold: 'u128'
  },
  /**
   * Lookup646: pallet_nis::pallet::ReceiptRecord<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletNisReceiptRecord: {
    proportion: 'Perquintill',
    owner: 'Option<(AccountId32,u128)>',
    expiry: 'u32'
  },
  /**
   * Lookup648: pallet_nis::pallet::Error<T>
   **/
  PalletNisError: {
    _enum: ['DurationTooSmall', 'DurationTooBig', 'AmountTooSmall', 'BidTooLow', 'UnknownReceipt', 'NotOwner', 'NotExpired', 'UnknownBid', 'PortionTooBig', 'Unfunded', 'AlreadyFunded', 'Throttled', 'MakesDust', 'AlreadyCommunal', 'AlreadyPrivate']
  },
  /**
   * Lookup649: pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesCollectionDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    totalDeposit: 'u128',
    freeHolding: 'bool',
    items: 'u32',
    itemMetadatas: 'u32',
    attributes: 'u32',
    isFrozen: 'bool'
  },
  /**
   * Lookup651: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesItemDetails: {
    owner: 'AccountId32',
    approved: 'Option<AccountId32>',
    isFrozen: 'bool',
    deposit: 'u128'
  },
  /**
   * Lookup652: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup653: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesItemMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup657: pallet_uniques::pallet::Error<T, I>
   **/
  PalletUniquesError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'WrongOwner', 'BadWitness', 'InUse', 'Frozen', 'WrongDelegate', 'NoDelegate', 'Unapproved', 'Unaccepted', 'Locked', 'MaxSupplyReached', 'MaxSupplyAlreadySet', 'MaxSupplyTooSmall', 'UnknownItem', 'NotForSale', 'BidTooLow']
  },
  /**
   * Lookup658: pallet_nfts::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletNftsCollectionDetails: {
    owner: 'AccountId32',
    ownerDeposit: 'u128',
    items: 'u32',
    itemMetadatas: 'u32',
    itemConfigs: 'u32',
    attributes: 'u32'
  },
  /**
   * Lookup660: pallet_nfts::types::CollectionRole
   **/
  PalletNftsCollectionRole: {
    _enum: ['__Unused0', 'Issuer', 'Freezer', '__Unused3', 'Admin']
  },
  /**
   * Lookup661: pallet_nfts::types::ItemDetails<sp_core::crypto::AccountId32, pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>, bounded_collections::bounded_btree_map::BoundedBTreeMap<sp_core::crypto::AccountId32, Option<T>, S>>
   **/
  PalletNftsItemDetails: {
    owner: 'AccountId32',
    approvals: 'BTreeMap<AccountId32, Option<u32>>',
    deposit: 'PalletNftsItemDeposit'
  },
  /**
   * Lookup662: pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsItemDeposit: {
    account: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup667: pallet_nfts::types::CollectionMetadata<Deposit, StringLimit>
   **/
  PalletNftsCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes'
  },
  /**
   * Lookup668: pallet_nfts::types::ItemMetadata<pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>, StringLimit>
   **/
  PalletNftsItemMetadata: {
    deposit: 'PalletNftsItemMetadataDeposit',
    data: 'Bytes'
  },
  /**
   * Lookup669: pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsItemMetadataDeposit: {
    account: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup672: pallet_nfts::types::AttributeDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsAttributeDeposit: {
    account: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup675: pallet_nfts::types::PendingSwap<CollectionId, ItemId, pallet_nfts::types::PriceWithDirection<Amount>, Deadline>
   **/
  PalletNftsPendingSwap: {
    desiredCollection: 'u32',
    desiredItem: 'Option<u32>',
    price: 'Option<PalletNftsPriceWithDirection>',
    deadline: 'u32'
  },
  /**
   * Lookup677: pallet_nfts::types::PalletFeature
   **/
  PalletNftsPalletFeature: {
    _enum: ['__Unused0', 'Trading', 'Attributes', '__Unused3', 'Approvals', '__Unused5', '__Unused6', '__Unused7', 'Swaps']
  },
  /**
   * Lookup678: pallet_nfts::pallet::Error<T, I>
   **/
  PalletNftsError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'ApprovalExpired', 'WrongOwner', 'BadWitness', 'CollectionIdInUse', 'ItemsNonTransferable', 'NotDelegate', 'WrongDelegate', 'Unapproved', 'Unaccepted', 'ItemLocked', 'LockedItemAttributes', 'LockedCollectionAttributes', 'LockedItemMetadata', 'LockedCollectionMetadata', 'MaxSupplyReached', 'MaxSupplyLocked', 'MaxSupplyTooSmall', 'UnknownItem', 'UnknownSwap', 'MetadataNotFound', 'AttributeNotFound', 'NotForSale', 'BidTooLow', 'ReachedApprovalLimit', 'DeadlineExpired', 'WrongDuration', 'MethodDisabled', 'WrongSetting', 'InconsistentItemConfig', 'NoConfig', 'RolesNotCleared', 'MintNotStarted', 'MintEnded', 'AlreadyClaimed', 'IncorrectData', 'WrongOrigin', 'WrongSignature', 'IncorrectMetadata', 'MaxAttributesLimitReached', 'WrongNamespace', 'CollectionNotEmpty']
  },
  /**
   * Lookup679: pallet_salary::StatusType<CycleIndex, BlockNumber, Balance>
   **/
  PalletSalaryStatusType: {
    cycleIndex: 'u32',
    cycleStart: 'u32',
    budget: 'u128',
    totalRegistrations: 'u128',
    totalUnregisteredPaid: 'u128'
  },
  /**
   * Lookup680: pallet_salary::ClaimantStatus<CycleIndex, Balance, Id>
   **/
  PalletSalaryClaimantStatus: {
    lastActive: 'u32',
    status: 'PalletSalaryClaimState'
  },
  /**
   * Lookup681: pallet_salary::ClaimState<Balance, Id>
   **/
  PalletSalaryClaimState: {
    _enum: {
      Nothing: 'Null',
      Registered: 'u128',
      Attempted: {
        registered: 'Option<u128>',
        id: 'Null',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup682: pallet_salary::pallet::Error<T, I>
   **/
  PalletSalaryError: {
    _enum: ['AlreadyStarted', 'NotMember', 'AlreadyInducted', 'NotInducted', 'NoClaim', 'ClaimZero', 'TooLate', 'TooEarly', 'NotYet', 'NotStarted', 'Bankrupt', 'PayError', 'Inconclusive', 'NotCurrent']
  },
  /**
   * Lookup683: pallet_core_fellowship::MemberStatus<BlockNumber>
   **/
  PalletCoreFellowshipMemberStatus: {
    isActive: 'bool',
    lastPromotion: 'u32',
    lastProof: 'u32'
  },
  /**
   * Lookup685: pallet_core_fellowship::pallet::Error<T, I>
   **/
  PalletCoreFellowshipError: {
    _enum: ['Unranked', 'Ranked', 'UnexpectedRank', 'InvalidRank', 'NoPermission', 'NothingDoing', 'AlreadyInducted', 'NotTracked', 'TooSoon']
  },
  /**
   * Lookup687: pallet_transaction_storage::TransactionInfo
   **/
  PalletTransactionStorageTransactionInfo: {
    _alias: {
      size_: 'size'
    },
    chunkRoot: 'H256',
    contentHash: 'H256',
    size_: 'u32',
    blockChunks: 'u32'
  },
  /**
   * Lookup689: pallet_transaction_storage::pallet::Error<T>
   **/
  PalletTransactionStorageError: {
    _enum: ['InsufficientFunds', 'NotConfigured', 'RenewedNotFound', 'EmptyTransaction', 'UnexpectedProof', 'InvalidProof', 'MissingProof', 'MissingStateData', 'DoubleCheck', 'ProofNotChecked', 'TransactionTooLarge', 'TooManyTransactions', 'BadContext']
  },
  /**
   * Lookup690: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup691: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup693: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup694: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup695: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup696: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup697: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup698: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoConvictionVotingTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusConvictionVotingTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup699: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusConvictionVotingTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup700: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PalletReferendaDeposit: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup703: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup709: pallet_referenda::types::TrackInfo<Balance, Moment>
   **/
  PalletReferendaTrackInfo: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PalletReferendaCurve',
    minSupport: 'PalletReferendaCurve'
  },
  /**
   * Lookup710: pallet_referenda::types::Curve
   **/
  PalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'Perbill',
        floor: 'Perbill',
        ceil: 'Perbill',
      },
      SteppedDecreasing: {
        begin: 'Perbill',
        end: 'Perbill',
        step: 'Perbill',
        period: 'Perbill',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup713: pallet_referenda::pallet::Error<T, I>
   **/
  PalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist']
  },
  /**
   * Lookup714: pallet_remark::pallet::Error<T>
   **/
  PalletRemarkError: {
    _enum: ['Empty', 'BadContext']
  },
  /**
   * Lookup716: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PalletConvictionVotingVoteCasting',
      Delegating: 'PalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup717: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup721: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup722: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup723: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'AccountId32',
    conviction: 'PalletConvictionVotingConviction',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup727: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup728: pallet_whitelist::pallet::Error<T>
   **/
  PalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup733: pallet_alliance::MemberRole
   **/
  PalletAllianceMemberRole: {
    _enum: ['Fellow', 'Ally', 'Retiring']
  },
  /**
   * Lookup737: pallet_alliance::pallet::Error<T, I>
   **/
  PalletAllianceError: {
    _enum: ['AllianceNotYetInitialized', 'AllianceAlreadyInitialized', 'AlreadyMember', 'NotMember', 'NotAlly', 'NoVotingRights', 'AlreadyElevated', 'AlreadyUnscrupulous', 'AccountNonGrata', 'NotListedAsUnscrupulous', 'TooManyUnscrupulousItems', 'TooLongWebsiteUrl', 'InsufficientFunds', 'WithoutIdentityDisplayAndWebsite', 'WithoutGoodIdentityJudgement', 'MissingProposalHash', 'MissingAnnouncement', 'TooManyMembers', 'TooManyAnnouncements', 'BadWitness', 'AlreadyRetiring', 'RetirementNoticeNotGiven', 'RetirementPeriodNotPassed', 'FellowsMissing']
  },
  /**
   * Lookup738: pallet_nomination_pools::PoolMember<T>
   **/
  PalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    lastRecordedRewardCounter: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup741: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PalletNominationPoolsBondedPoolInner: {
    commission: 'PalletNominationPoolsCommission',
    memberCounter: 'u32',
    points: 'u128',
    roles: 'PalletNominationPoolsPoolRoles',
    state: 'PalletNominationPoolsPoolState'
  },
  /**
   * Lookup742: pallet_nomination_pools::Commission<T>
   **/
  PalletNominationPoolsCommission: {
    current: 'Option<(Perbill,AccountId32)>',
    max: 'Option<Perbill>',
    changeRate: 'Option<PalletNominationPoolsCommissionChangeRate>',
    throttleFrom: 'Option<u32>'
  },
  /**
   * Lookup745: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsPoolRoles: {
    depositor: 'AccountId32',
    root: 'Option<AccountId32>',
    nominator: 'Option<AccountId32>',
    bouncer: 'Option<AccountId32>'
  },
  /**
   * Lookup746: pallet_nomination_pools::RewardPool<T>
   **/
  PalletNominationPoolsRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup747: pallet_nomination_pools::SubPools<T>
   **/
  PalletNominationPoolsSubPools: {
    noEra: 'PalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup748: pallet_nomination_pools::UnbondPool<T>
   **/
  PalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup754: pallet_nomination_pools::pallet::Error<T>
   **/
  PalletNominationPoolsError: {
    _enum: {
      PoolNotFound: 'Null',
      PoolMemberNotFound: 'Null',
      RewardPoolNotFound: 'Null',
      SubPoolsNotFound: 'Null',
      AccountBelongsToOtherPool: 'Null',
      FullyUnbonding: 'Null',
      MaxUnbondingLimit: 'Null',
      CannotWithdrawAny: 'Null',
      MinimumBondNotMet: 'Null',
      OverflowRisk: 'Null',
      NotDestroying: 'Null',
      NotNominator: 'Null',
      NotKickerOrDestroying: 'Null',
      NotOpen: 'Null',
      MaxPools: 'Null',
      MaxPoolMembers: 'Null',
      CanNotChangeState: 'Null',
      DoesNotHavePermission: 'Null',
      MetadataExceedsMaxLen: 'Null',
      Defensive: 'PalletNominationPoolsDefensiveError',
      PartialUnbondNotAllowedPermissionlessly: 'Null',
      MaxCommissionRestricted: 'Null',
      CommissionExceedsMaximum: 'Null',
      CommissionChangeThrottled: 'Null',
      CommissionChangeRateNotAllowed: 'Null',
      NoPendingCommission: 'Null',
      NoCommissionCurrentSet: 'Null',
      PoolIdInUse: 'Null',
      InvalidPoolId: 'Null',
      BondExtraRestricted: 'Null'
    }
  },
  /**
   * Lookup755: pallet_nomination_pools::pallet::DefensiveError
   **/
  PalletNominationPoolsDefensiveError: {
    _enum: ['NotEnoughSpaceInUnbondPool', 'PoolNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'BondedStashKilledPrematurely']
  },
  /**
   * Lookup756: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoRankedCollectiveTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusRankedCollectiveTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup757: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusRankedCollectiveTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletRankedCollectiveTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup760: pallet_ranked_collective::MemberRecord
   **/
  PalletRankedCollectiveMemberRecord: {
    rank: 'u16'
  },
  /**
   * Lookup764: pallet_ranked_collective::pallet::Error<T, I>
   **/
  PalletRankedCollectiveError: {
    _enum: ['AlreadyMember', 'NotMember', 'NotPolling', 'Ongoing', 'NoneRemaining', 'Corruption', 'RankTooLow', 'InvalidWitness', 'NoPermission']
  },
  /**
   * Lookup765: pallet_fast_unstake::types::UnstakeRequest<T>
   **/
  PalletFastUnstakeUnstakeRequest: {
    stashes: 'Vec<(AccountId32,u128)>',
    checked: 'Vec<u32>'
  },
  /**
   * Lookup768: pallet_fast_unstake::pallet::Error<T>
   **/
  PalletFastUnstakeError: {
    _enum: ['NotController', 'AlreadyQueued', 'NotFullyBonded', 'NotQueued', 'AlreadyHead', 'CallNotAllowed']
  },
  /**
   * Lookup769: pallet_message_queue::BookState<MessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup771: pallet_message_queue::Neighbours<MessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'u32',
    next: 'u32'
  },
  /**
   * Lookup772: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup774: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable']
  },
  /**
   * Lookup778: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup779: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup780: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup781: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup784: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup785: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup786: pallet_asset_tx_payment::ChargeAssetTxPayment<T>
   **/
  PalletAssetTxPaymentChargeAssetTxPayment: {
    tip: 'Compact<u128>',
    assetId: 'Option<u32>'
  },
  /**
   * Lookup787: kitchensink_runtime::Runtime
   **/
  KitchensinkRuntimeRuntime: 'Null'
};

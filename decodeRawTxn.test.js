const bitcoin = require('bitcoinjs-lib');
const decodeRawTxn = require('./index');

describe('decodeRawTxn', () => {
  it('should correctly decode a raw transaction', () => {
    const rawTxn = '020000000001010ccc140e766b5dbc884ea2d780c5e91e4eb77597ae64288a42575228b79e234900000000000000000002bd37060000000000225120245091249f4f29d30820e5f36e1e5d477dc3386144220bd6f35839e94de4b9cae81c00000000000016001416d31d7632aa17b3b316b813c0a3177f5b6150200140838a1f0f1ee607b54abf0a3f55792f6f8d09c3eb7a9fa46cd4976f2137ca2e3f4a901e314e1b827c3332d7e1865ffe1d7ff5f5d7576a9000f354487a09de44cd00000000';
    const expectedVersion = 2;
    const expectedInputs = [{
      hash: '49239eb7285257428a2864ae9775b74e1ee9c580d7a24e88bc5d6b760e14cc0c',
      index: 0,
      script: '',
      sequence: 0
    }];
    const expectedOutputs = [{
      satoshis: 407485,
      script: '5120245091249f4f29d30820e5f36e1e5d477dc3386144220bd6f35839e94de4b9ca'
    },
    {
      satoshis: 7400,
      script: '001416d31d7632aa17b3b316b813c0a3177f5b615020'
    }];
    const expectedLocktime = 0;

    const result = decodeRawTxn(rawTxn);

    expect(result.version).toEqual(expectedVersion);
    expect(result.inputs).toEqual(expect.arrayContaining(expectedInputs));
    expect(result.outputs).toEqual(expect.arrayContaining(expectedOutputs));
    expect(result.locktime).toEqual(expectedLocktime);
  });
});
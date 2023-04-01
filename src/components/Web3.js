import { SimpleAccountAPI } from "@account-abstraction/sdk";
import { connectMetamask } from "./connectMetamask"

export default function Web3() {

    async function connect(){
        const { web3Provider, web3Signer, address } = await connectMetamask();
        console.log()
        const walletAPI = new SimpleAccountAPI({
            provider: web3Provider,
            entryPointAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            owner: web3Provider.getSigner(address),
            factoryAddress: ""
        });

        console.log(walletAPI);

        

        const op = await walletAPI.createSignedUserOp({
            target: recipient.address,
            data: recipient.interface.encodeFunctionData('something', ['hello'])
          })

        // window.ethereum.
        // request({
        //     "jsonrpc": "2.0",
        //     "id": 1,
        //     "method": "eth_sendUserOperation",
        //     "params": [
        //       // UserOperation object
        //       {
        //         sender,
        //         nonce,
        //         initCode,
        //         callData,
        //         callGasLimit,
        //         verificationGasLimit,
        //         preVerificationGas,
        //         maxFeePerGas,
        //         maxPriorityFeePerGas,
        //         paymasterAndData,
        //         signature
        //       },
          
        //       // Supported EntryPoint address
        //       entryPoint
        //     ]
        // })

    }

    return (
        <div>
            <h1>Home</h1>
            <button 
                onClick={connect}>Connect Wallet</button>
        </div>
    )
}
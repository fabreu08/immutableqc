'use client';

 import { createConfig, http } from 'wagmi';
 import { base } from 'wagmi/chains';
 import { createPublicClient, createWalletClient, custom } from 'viem';
 import { metaMask } from 'wagmi/connectors';

 // Base Mainnet Config (8453) — VIEM + WAGMI for EOA
 export const config = createConfig({                                                                                                                                                                                                            
   chains: [base],                                                                                                                                                                                                                               
   transports: {                                                                                                                                                                                                                                 
     [base.id]: http(process.env.BASE_RPC_URL || 'https://mainnet.base.org'),                                                                                                                                                                                               
   },                                                                                                                                                                                                                                            
   connectors: [metaMask()],                                                                                                                                                                                                                     
 });                                                                                                                                                                                                                                             

 export const publicClient = createPublicClient({                                                                                                                                                                                                
   chain: base,                                                                                                                                                                                                                                  
   transport: http(process.env.BASE_RPC_URL || 'https://mainnet.base.org'),                                                                                                                                                                                                 
 });                                                                                                                                                                                                                                             

 export const walletClient = createWalletClient({                                                                                                                                                                                                
   chain: base,                                                                                                                                                                                                                                  
   transport: custom(window.ethereum), // MetaMask                                                                                                                                                                                               
 });                                                                                                                                                                                                                                             

 // Contract                                                                                                                                                                                                                                     
 export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x65d7245Ab1F2382a6F9fb0e1f14be8cdf1Bb4A69'; // Mainnet LIVE                                                                                                                                                   

 // ABI for mintTo (adjust to your contract's ABI)
 export const contractABI = [                                                                                                                                                                                                                    
   {                                                                                                                                                                                                                                             
     "inputs": [                                                                                                                                                                                                                                 
       {"name": "to", "type": "address"},                                                                                                                                                                                                        
       {"name": "uri", "type": "string"},                                                                                                                                                                                                        
       {"name": "value", "type": "string"},                                                                                                                                                                                                      
       {"name": "signature", "type": "bytes"},                                                                                                                                                                                                   
       {"name": "timestamp", "type": "uint256"}                                                                                                                                                                                                  
     ],                                                                                                                                                                                                                                          
     "name": "mintTo",                                                                                                                                                                                                                           
     "outputs": [],                                                                                                                                                                                                                              
     "stateMutability": "nonpayable",                                                                                                                                                                                                            
     "type": "function"                                                                                                                                                                                                                          
   }                                                                                                                                                                                                                                             
 ] as const;                                                                                                                                                                                                                                     

 export const paymasterConfig = {                                                                                                                                                                                                               
   policyId: process.env.NEXT_PUBLIC_PAYMASTER_POLICY_ID || '', // Optional; fallback to EOA if empty                                                                                                                                                                                                 
 };                                                                                                                                                                                                                                             

 export const getWalletBalance = async (address: `0x${string}`) => {                                                                                                                                                                                                        
   if (!address) return 0n;                                                                                                                                                                                                                     
   const balance = await publicClient.getBalance({ address });                                                                                                                                                                                  
   return balance;                                                                                                                                                                                                                               
 };                                                                                                                                                                                                                                              

 export const estimateGas = async (params: any) => {                                                                                                                                                                                             
   // Simulate for gas                                                                                                                                                                                                                           
   const { request } = await publicClient.simulateContract({                                                                                                                                                                                    
     ...params,                                                                                                                                                                                                                                  
     account: params.account || '0x' + '0'.repeat(40),                                                                                                                                                                                          
   });                                                                                                                                                                                                                                          
   return request.gas as bigint;                                                                                                                                                                                                                 
 };                                                                                                                                                                                                                                              

 console.log('[BASE MAINNET VIEM] Config loaded for chain 8453, contract', contractAddress);

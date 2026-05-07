import WDK from '@tetherto/wdk';
import WalletManagerSolana from '@tetherto/wdk-wallet-solana';

/**
 * Initializes the Tether WDK instance for Solana.
 * @param {string} seedPhrase - The user's BIP-39 mnemonic.
 */
export async function initializeSovereignWallet(seedPhrase) {
  const wdk = new WDK(seedPhrase);

  // Registering Solana with a provider for Mainnet-Beta
  wdk.registerWallet('solana', WalletManagerSolana, {
    provider: process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
    commitment: 'confirmed'
  });

  return wdk;
}

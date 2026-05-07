/**
 * Executes a secure USDt settlement on Solana after QVAC verification.
 */
export async function executeUsdtSettlement(wdk, recipient, amount) {
  try {
    const account = await wdk.getAccount('solana', 0);
    
    // Official USDt Mint Address on Solana
    const USDT_MINT = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB';

    console.log(`WDK: Initiating transfer of ${amount} USDt to ${recipient}`);

    // The 'transfer' method handles SPL token logic automatically
    const result = await account.transfer({
      token: USDT_MINT,
      recipient: recipient,
      amount: BigInt(amount), // Smallest unit (6 decimals for USDt)
    });

    console.log(`Settlement Successful: ${result.hash}`);
    return result;
  } catch (error) {
    console.error("WDK Settlement Failed:", error);
    throw error;
  } finally {
    // Critical: Securely clear keys from memory
    wdk.dispose();
  }
}

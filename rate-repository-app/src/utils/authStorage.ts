import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  /**
   * ECMAScript native way to declare private class field members:
   * 
   * #namespace = 'auth';
   * 
   */
  private namespace: string;
  public constructor (namespace = 'auth') {
    this.namespace = namespace;
  }

  public async getAccessToken(): Promise<string | null> {
    const accesToken = await AsyncStorage.getItem(`${this.namespace}:user`);

    return accesToken;
  }

  public async setAccessToken(token: string): Promise<void> {
    await AsyncStorage.setItem(`${this.namespace}:user`, token);
  }

  public async removeAccessToken(): Promise<void> {
    await AsyncStorage.removeItem(`${this.namespace}:user`);
  }
}

export default AuthStorage;
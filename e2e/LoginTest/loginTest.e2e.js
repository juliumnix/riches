//Para testar o modulo de login apenas, comentar as seguintes linhas no arquivo ModalLogin/index.tsx
// 53 await AsyncStorage.setItem('@riches:id_usuario', response.data);
// 56 navigation.reset({ routes: [{ name: 'HomeApp' }] });
describe('Testes de Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Login completo', async () => {
    await element(by.id('ConfirmarButton')).tap();
    await element(by.id('emailInputLogin')).tap();
    await element(by.id('emailInputLogin')).typeText('1234');
    await element(by.id('passwordInputLogin')).tap();
    await element(by.id('passwordInputLogin')).typeText('1234');
    await element(by.id('KKK')).tap();
    await element(by.id('arrowButton')).tap();

    await expect(element(by.id('ErrorText'))).not.toBeVisible();
  });

  it('Login errado', async () => {
    await element(by.id('ConfirmarButton')).tap();
    await element(by.id('emailInputLogin')).tap();
    await element(by.id('emailInputLogin')).typeText('0000');
    await element(by.id('passwordInputLogin')).tap();
    await element(by.id('passwordInputLogin')).typeText('0000');
    await element(by.id('KKK')).tap();
    await element(by.id('arrowButton')).tap();

    await expect(element(by.id('ErrorText'))).toBeVisible();
  });

  it('Tentando criar conta que ja existe', async () => {
    await element(by.id('ConfirmarButton')).tap();
    await element(by.id('createAccountButton')).tap();
    await element(by.id('emailInputSignIn')).tap();
    await element(by.id('emailInputSignIn')).typeText('1234');
    await element(by.id('passwordInputSignIn')).tap();
    await element(by.id('passwordInputSignIn')).typeText('1234');
    await element(by.id('Title')).tap();
    await element(by.id('arrowButtonSignIn')).tap();

    await expect(element(by.id('ErrorTextSignIn'))).toBeVisible();
  });

  it('Criando conta nova', async () => {
    await element(by.id('ConfirmarButton')).tap();
    await element(by.id('createAccountButton')).tap();
    await element(by.id('emailInputSignIn')).tap();
    await element(by.id('emailInputSignIn')).typeText(
      Math.random().toString(36).substring(7),
    );
    await element(by.id('passwordInputSignIn')).tap();
    await element(by.id('passwordInputSignIn')).typeText(
      Math.random().toString(36).substring(7),
    );
    await element(by.id('Title')).tap();
    await element(by.id('arrowButtonSignIn')).tap();
    await element(by.id('NameInput')).tap();
    await element(by.id('NameInput')).typeText('Teste');
    await element(by.id('CloseInput')).tap();
    await element(by.id('ArrowButtonUpdateName')).tap();

    await element(by.id('inputBalance')).tap();
    await element(by.id('inputBalance')).typeText('1000');
    await element(by.id('CloseInputBalanceScreen')).tap();
    await element(by.id('UpdateBalanceButton')).tap();

    await expect(element(by.id('NomeUsuario'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});

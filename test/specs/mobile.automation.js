describe('Mobile Automation Test', () => {
    it('should open the app and view home screen', async () => {
      // Launch the "Diet Meal App"
      // Verify presence of user details form
      const userDetailsForm = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
      await userDetailsForm.waitForDisplayed();
      expect(userDetailsForm).toBeDisplayed();
  
      // Enter user details
      const nameInput = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText');
      await nameInput.waitForDisplayed();
      await nameInput.click(); // Tambahkan langkah pengklikan
      await nameInput.setValue('Yuyud Wahyudi');
  
      const weightInput = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText');
      await weightInput.waitForDisplayed();
      await weightInput.click(); // Tambahkan langkah pengklikan
      await weightInput.setValue('60');
  
      const heightInput = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText');
      await heightInput.waitForDisplayed();
      await heightInput.click(); // Tambahkan langkah pengklikan
      await heightInput.setValue('160');

      // Hide the keyboard
      await driver.hideKeyboard();

      const genderMaleRadioButton = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[1]');
      await genderMaleRadioButton.waitForDisplayed();
      await genderMaleRadioButton.click();
  
      // Click on the "Next" button
      const nextButton = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button');
      await nextButton.waitForDisplayed();
      await nextButton.click();
  
      // Verify presence of routine activity options
      const routineActivityOptions = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
      await routineActivityOptions.waitForDisplayed();
      expect(routineActivityOptions).toBeDisplayed();
  
      // Select routine activity option
      const routineActivityOption = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[7]');
      await routineActivityOption.waitForDisplayed();
      await routineActivityOption.click();
  
      // Click on the "Selesai" button
      const selesaiButton = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button');
      await selesaiButton.waitForDisplayed();
      await selesaiButton.click();
  
      // Verify redirection to home screen and presence of home icon
      const homeIcon = await $('//android.widget.FrameLayout[@content-desc="Home"]/android.widget.ImageView');
      await homeIcon.waitForDisplayed();
      expect(homeIcon).toBeDisplayed();
    });
  });
  
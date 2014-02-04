﻿///////////////////////////////////////////////////////
//                                        
//   Title:     SettingsPage.xaml.cs
//   Author:    Ma Zhencai Jayden
//
///////////////////////////////////////////////////////

using System.Windows;
using System.Windows.Controls;
using System.IO;

namespace nsync
{
    /// <summary>
    /// Interaction logic for SettingsPage.xaml
    /// </summary>
    public partial class SettingsPage : Page
    {
        #region Class Variables
        private Settings settingsManager;
        private bool pageIsLoaded = false;
        private Window mainWindow = Application.Current.MainWindow;
        private DebugLogger debugLogger;
        #endregion

        #region Constructor
        /// <summary>
        /// Constructor for SettingsPage
        /// </summary>
        public SettingsPage()
        {
            InitializeComponent();

            // Get the debugLogger class instance
            debugLogger = DebugLogger.Instance;

            CheckSettings();
        }
        #endregion

        #region Private Methods
        /// <summary>
        /// Update the checkbox on SettingsPage
        /// </summary>
        private void CheckSettings()
        {
            settingsManager = Settings.Instance;

            //gets helper window settings
            int loadedTimer = settingsManager.GetHelperWindowStatus();
            if (loadedTimer == -1)
                loadedTimer = 11;
            HelperWindowSlider.Value = loadedTimer;
            HelperWindowSliderValue.SelectedIndex = loadedTimer;

            //gets exclude window settings
            if (settingsManager.GetExcludeWindowStatus() == 0)
                CheckboxToggleExcludeWindow.IsChecked = true;

            //gets trackback settings
            if (settingsManager.GetTrackBackStatus() == 0)
                CheckboxToggleTrackBack.IsChecked = true;

            //flag for enabling the boxes for user input
            pageIsLoaded = true;
        }

        /// <summary>
        /// Event when comboBox value is changed
        /// </summary>
        private void HelperWindowSliderValue_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            ResetUI();
            if (pageIsLoaded)
            {
                if (HelperWindowSlider.Value != HelperWindowSliderValue.SelectedIndex)
                {
                    HelperWindowSlider.Value = HelperWindowSliderValue.SelectedIndex;
                    settingsManager.SetHelperWindowStatus((int)HelperWindowSlider.Value);
                }

                debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - HelperWindowSliderValue_SelectionChanged()", "Helper window combobox changed to " + HelperWindowSlider.Value.ToString());
            }
        }

        /// <summary>
        /// Event when slider value is changed
        /// </summary>
        private void HelperWindowSlider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            ResetUI();
            if (pageIsLoaded)
            {
                if (HelperWindowSliderValue.SelectedIndex != HelperWindowSlider.Value)
                {
                    HelperWindowSliderValue.SelectedIndex = (int)HelperWindowSlider.Value;
                    settingsManager.SetHelperWindowStatus((int)HelperWindowSlider.Value);
                }

                debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - HelperWindowSlider_ValueChanged()", "Helper window slider changed to " + HelperWindowSlider.Value.ToString());
            }
        }

        /// <summary>
        /// Event when Exclude Checkbox is checked
        /// </summary>
        private void CheckboxToggleExcludeWindow_Checked(object sender, RoutedEventArgs e)
        {
            ResetUI();
            settingsManager.SetExcludeWindowStatus(false);

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - CheckboxToggleExcludeWindow_Checked()", "Exclude Window disabled");
        }

        private void CheckboxToggleExcludeWindow_UnChecked(object sender, RoutedEventArgs e)
        {
            ResetUI();
            settingsManager.SetExcludeWindowStatus(true);

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - CheckboxToggleExcludeWindow_UnChecked()", "Exclude Window enabled");
        }

        private void CheckboxToggleTrackBack_Checked(object sender, RoutedEventArgs e)
        {
            ResetUI();
            settingsManager.SetTrackBackStatus(false);

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - CheckboxToggleTrackBack_Checked()", "TrackBack disabled");
        }

        private void CheckboxToggleTrackBack_UnChecked(object sender, RoutedEventArgs e)
        {
            ResetUI();
            settingsManager.SetTrackBackStatus(true);

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - CheckboxToggleTrackBack_UnChecked()", "TrackBack enabled");
        }

        private void ButtonClearLogFolder_Click(object sender, RoutedEventArgs e)
        {
            ResetUI();
            LabelProgress.Content = "Clearing Logs...";
            LabelProgress.Visibility = Visibility.Visible;

            LabelProgress.Content = settingsManager.ClearLogFolder();
            LabelProgress.Visibility = Visibility.Visible;

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - ButtonClearLogFolder_Click()", "Log folder cleared");
        }

        private void ButtonOpenLogFolder_Click(object sender, RoutedEventArgs e)
        {
            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - ButtonOpenLogFolder_Click()", "Trying to open log folder");

            ResetUI();
            string message = settingsManager.OpenLogFolder();

            if (message != null)
            {
                LabelProgress.Content = message;
                LabelProgress.Visibility = Visibility.Visible;
                debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - ButtonOpenLogFolder_Click()", "Opening of log folder failed");
            }
        }

        private void ButtonClearMetaData_Click(object sender, RoutedEventArgs e)
        {
            ResetUI();
            LabelProgress.Content = "Clearing Meta Data...";
            LabelProgress.Visibility = Visibility.Visible;

            LabelProgress.Content = settingsManager.ClearMetaData();
            LabelProgress.Visibility = Visibility.Visible;

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - ButtonClearMetaData_Click()", "Clearing metadata: " + LabelProgress.Content.ToString());
        }

        private void ButtonClearSettings_Click(object sender, RoutedEventArgs e)
        {
            ResetUI();
            LabelProgress.Content = "Clearing Settings...";
            LabelProgress.Visibility = Visibility.Visible;

            settingsManager.ClearSettings();
            CheckSettings();

            LabelProgress.Content = "Settings Resetted.";
            LabelProgress.Visibility = Visibility.Visible;

            debugLogger.LogMessage(nsync.Properties.Resources.notApplicable, nsync.Properties.Resources.notApplicable, "SettingsPage.xaml.cs - ButtonClearSettings_Click()", "Cleared settings.xml");
        }

        private void ResetUI()
        {
            LabelProgress.Visibility = Visibility.Hidden;
        }
        #endregion
    }
}

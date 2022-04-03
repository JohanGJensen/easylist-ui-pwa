import React from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Select } from '@mantine/core';

// types

const CheckboxSetting: React.FC = () => {
  const { handleCheckboxPos, checkboxPos, lang } = React.useContext(SettingsContext);

  return (
    <>
      <Text size={'md'} children={lang.settingsCheckboxText} />
      <Select
        data={[
          { value: 'right', label: lang.settingsCheckboxOptionLeft },
          { value: 'left', label: lang.settingsCheckboxOptionRight },
        ]}
        value={checkboxPos}
        onChange={handleCheckboxPos}
      />
    </>
  );
}

export default CheckboxSetting;

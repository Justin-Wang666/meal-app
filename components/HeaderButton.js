import React from 'react';
import { HeaderButton as NavHeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const HeaderButton = (props) => {
    return (
        <NavHeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color="red"
        />
    );
};

export default HeaderButton;
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopSvg, AccountSvg, CartSvg, FavouriteSvg, ExploreSvg } from '../components/svg'
const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

const Tab_Icons: any = {
    shop: ShopSvg,
    account: AccountSvg,
    explore: ExploreSvg,
    cart: CartSvg,
    favourite: FavouriteSvg,
}

export const BottomTabBar: React.FC<any> = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const styles = StyleSheet.create({
        navigation: {
            flexDirection: 'row',
            height: 80,
            width: width,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: {
                width: 3,
                height: 3,
            },
            shadowOpacity: 0.27,
            borderRadius: 15,
        },
        element: {
            width: width / 5,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <View style={styles.navigation}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const CustomIcon = Tab_Icons[route.name];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.element}>
                            <CustomIcon color={isFocused ? '#53B175' : '#181725'} />
                            <Text style={{ color: isFocused ? '#53B175' : '#181725' }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

<Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
</Tab.Navigator>
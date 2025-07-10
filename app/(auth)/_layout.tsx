import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function LoginLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: true}} >
        <Stack.Screen name="login" options={{headerShown: false}}/>
        <Stack.Screen name="createAccount" 
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen name='nameScreen' options={{headerShown: false}} />
        <Stack.Screen name='dobScreen' options={{headerShown: false}} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

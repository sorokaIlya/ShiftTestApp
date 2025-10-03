import { RootContextProvider } from './src/core/context/context-provider';
import { AccessProvider } from './src/application/permission-provider';
import { ShiftNavigationStack } from '@/router/shift-router';
import { BaseLayout } from '@/application/base-layout';
import { LocationInitializer } from '@/application/location-initializer';

function App() {
  return (
    <RootContextProvider>
      <BaseLayout>
        <AccessProvider>
          <LocationInitializer />
          <ShiftNavigationStack />
        </AccessProvider>
      </BaseLayout>
    </RootContextProvider>
  );
}

export default App;

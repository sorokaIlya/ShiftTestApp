import { RootContextProvider } from './src/core/context/context-provider';
import { AccessProvider } from './src/application/permission-provider';
import { BaseLayout } from './src/application/base-layout';
import { ShiftNavigationStack } from './src/router/shift-router';

function App() {
  return (
    <RootContextProvider>
      <BaseLayout>
        <AccessProvider>
          <ShiftNavigationStack />
        </AccessProvider>
      </BaseLayout>
    </RootContextProvider>
  );
}

export default App;

/* global process */

import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

let DevTools = () => <span />;

if (process.env.NODE_ENV !== 'production') {
  DevTools = createDevTools(
    <DockMonitor
      defaultIsVisible={false}
      toggleVisibilityKey="ctrl-h"
      changePositionKey="ctrl-w"
      changeMonitorKey="ctrl-m">
      <LogMonitor />
    </DockMonitor>
  );
}

export default DevTools;

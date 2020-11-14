import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

import { ReactDrilldownMenu } from 'react-drilldown-menu';

export default function Menu1() {
  const location = useLocation();
  return (
    <div className="menu">
      <ReactDrilldownMenu
        name="Menu 1"
        icon={<Icon.FileBinaryFill />} // asdads
        activeLink={location.pathname}
        navLink={NavLink}
        defaultLeafIcon={<Icon.CircleFill />}
        defaultBranchIcon={<Icon.SquareFill />}
        links={{
          'page-1': {
            label: 'Page 1',
          },
          'page-2': {
            label: 'Page 2',
            icon: <Icon.BarChartFill />,
          },
          'node-1': {
            label: 'Node 1',
            links: {
              'page-3': {
                label: 'Page 3',
              },
              'page-4': {
                label: 'Page 4',
              },
            },
          },
        }}
      />
    </div>
  );
}

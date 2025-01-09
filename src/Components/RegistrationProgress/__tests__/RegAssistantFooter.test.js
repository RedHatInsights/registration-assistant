import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import RegAssistantFooter from '../RegAssistantFooter';
import { operatingSystemList } from '../operatingSystemConstants';
import { AUTOMATE_WITH_SATELLITE } from '../../../constants';

describe('RegAssistantFooter', () => {
  it('should display proper footer for rhel 7', async () => {
    render(
      <Router>
        <RegAssistantFooter operatingSystem={operatingSystemList[1]} />
      </Router>
    );

    expect(screen.getByText(AUTOMATE_WITH_SATELLITE)).toBeVisible();

    expect(
      screen.queryAllByText(
        /read more about remote host configuration \(rhc\) options and levels of connectivity:/i
      )
    ).toHaveLength(0);
  });

  it('should display proper footer for rhel 8', async () => {
    render(
      <Router>
        <RegAssistantFooter operatingSystem={operatingSystemList[2]} />
      </Router>
    );

    expect(screen.getByText(AUTOMATE_WITH_SATELLITE)).toBeVisible();

    expect(
      screen.queryAllByText(
        /read more about remote host configuration \(rhc\) options and levels of connectivity:/i
      )
    ).toHaveLength(0);
  });

  it('should display proper footer for centos 7', async () => {
    render(
      <Router>
        <RegAssistantFooter operatingSystem={operatingSystemList[0]} />
      </Router>
    );

    expect(screen.getByText(AUTOMATE_WITH_SATELLITE)).toBeVisible();

    expect(
      screen.queryAllByText(
        /read more about remote host configuration \(rhc\) options and levels of connectivity:/i
      )
    ).toHaveLength(0);
  });

  it('should display proper footer for rhel 9', async () => {
    render(
      <Router>
        <RegAssistantFooter operatingSystem={operatingSystemList[3]} />
      </Router>
    );

    expect(screen.getByText(AUTOMATE_WITH_SATELLITE)).toBeVisible();

    expect(
      screen.getByText(
        /read more about remote host configuration \(rhc\) options and levels of connectivity:/i
      )
    ).toBeVisible();
  });
});

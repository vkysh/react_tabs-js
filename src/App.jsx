import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const currentTab =
    tabs.find(tab => {
      return tab.id === activeTab;
    }) ?? tabs[0];

  const tabChanger = id => event => {
    event.preventDefault();
    if (id !== activeTab) {
      setActiveTab(id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tab.id === currentTab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a href="#tab" onClick={tabChanger(tab.id)} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Tabs tab={currentTab} />
      </div>
    </div>
  );
};

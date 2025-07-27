export const Tabs = ({ tab }) => (
  <div className="block" data-cy="TabContent" key={tab.id}>
    {tab.content}
  </div>
);

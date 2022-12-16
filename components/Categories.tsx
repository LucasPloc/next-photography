import { Tab } from '@headlessui/react';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans',
  },
  {
    key: 'forests',
    display: 'Forests',
  },
];

const Categories = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      {' '}
      <Tab.Group>
        <Tab.List className='flex items-center gap-12'>
          {tabs.map(({ key, display }) => (
            <Tab key={key} className='p-2 outline-none'>
              {({ selected }) => (
                <span className={selected ? 'text-white' : 'text-stone-600'}>
                  {display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className='h-full bg-stone-900 
          max-w-[900px] w-full p-2 sm:p-4 
          my-6 bg-opacity-30'
        >
          <Tab.Panel>All Photos</Tab.Panel>
          <Tab.Panel>Oceans Photos</Tab.Panel>
          <Tab.Panel>Forests Photos</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Categories;

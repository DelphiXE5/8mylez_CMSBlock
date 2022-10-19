import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
  name: 'team-card',
  category: 'text-image',
  label: 'Team Card',
  component: 'sw-cms-block-team-card',
  previewComponent: 'sw-cms-preview-team-card',
  defaultConfig: {
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    sizingMode: 'boxed'
  },
  slots: {
    one: 'employee-card',
    two: 'employee-card',
    three: 'employee-card'
  }
});
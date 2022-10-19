import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
  name: 'employee-card',
  label: 'Employee card',
  component: 'sw-cms-el-employee-card',
  configComponent: 'sw-cms-el-config-employee-card',
  previewComponent: 'sw-cms-el-preview-employee-card',
  defaultConfig: {
    enabled: {
      source: "static",
      value: true,
    },
    avatarUrl: {
      source: "static",
      value: null,
    },
    avatarID: {
      source: "static",
      value: null,
    },
    name: {
      source: "static",
      value: "John Doe"
    },
    jobTitle: {
      source: "static",
      value: "Doeing"
    }
  }
});
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
      avatar: {
        id: "",
        url: ""
      },
      name: "John Doe",
      jobTitle: "Doeing"
  }
});
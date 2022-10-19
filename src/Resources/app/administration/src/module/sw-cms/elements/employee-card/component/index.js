import template from './sw-cms-el-employee-card.html.twig';
import './sw-cms-el-employee-card.scss';
import CMS from 'src/module/sw-cms/constant/sw-cms.constant';

const { Filter } = Shopware;

Shopware.Component.register('sw-cms-el-employee-card', {
  template,
  mixins: [
    'cms-element'
  ],

  computed: {
    avatar() {
      return `${this.mediaUrl}`;
    },
    name() {
      return `${this.element.config.name?.value}`;
    },
    jobTitle() {
      return `${this.element.config.jobTitle?.value}`;
    },
    enabled(){
      return this.element.config.enabled?.value ?? true;
    },
    mediaUrl() {
      const staticFallBackImage = this.assetFilter(`cmsblock/static/img/employee.jpg`);
      const elemUrl = this.element.config.avatarUrl?.value;

      if (!elemUrl) {
        return staticFallBackImage;
      }

      return elemUrl;
    },
    assetFilter() {
      return Filter.getByName('asset');
    },
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('employee-card');
    }
  }
});
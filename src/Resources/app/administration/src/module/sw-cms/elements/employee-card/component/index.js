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
      console.log(this.mediaUrl)
      return `${this.mediaUrl}`;
    },
    name() {
      return `${this.element.config.name}`;
    },
    jobTitle() {
      return `${this.element.config.jobTitle}`;
    },
    mediaUrl() {
      const fallBackImageFileName = CMS.MEDIA.previewMountain.slice(CMS.MEDIA.previewMountain.lastIndexOf('/') + 1);
      const staticFallBackImage = this.assetFilter(`administration/static/img/cms/${fallBackImageFileName}`);
      const elemUrl = this.element.config.avatar.url;

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
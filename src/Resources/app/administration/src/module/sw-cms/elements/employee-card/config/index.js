import template from './sw-cms-el-config-employee-card.html.twig';

Shopware.Component.register('sw-cms-el-config-employee-card', {
  template,

  inject: ['repositoryFactory'],

  mixins: [
    'cms-element'
  ],

  computed: {
    mediaRepository() {
      return this.repositoryFactory.create('media');
    },
    avatar: {
      get() {
        return this.element.config.avatar.id;
      },

      set(value) {
        this.element.config.avatar.id = value
        this.onAvatarUpdate(value)
      }
    },
    name: {
      get() {
        return this.element.config.name;
      },

      set(value) {
        this.element.config.name = value;
      }
    },
    jobTitle: {
      get() {
        return this.element.config.jobTitle;
      },

      set(value) {
        this.element.config.jobTitle = value;
      }
    }
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('employee-card');
      console.log(this.element.config)
    },

    async onAvatarUpdate(value) {
      this.element.config.avatar.id = value

      const media = await this.mediaRepository.get(value);
      console.log(media);
      this.element.config.avatar.url = media.url;
      

      this.$emit('element-update', this.element);
    },

    onNameUpdate(value) {
      this.element.config.name = value;

      this.$emit('element-update', this.element);
    },


    onJobTitleUpdate(value) {
      this.element.config.jobTitle = value;

      this.$emit('element-update', this.element);
    }
  }
});
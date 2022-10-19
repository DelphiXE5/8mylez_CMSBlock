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
    enabled: {
      get() {
        return this.element.config.enabled.value;
      },

      set(value) {
        this.element.config.enabled.value = value;
      }
    },
    avatar: {
      get() {
        return this.element.config.avatarID.value;
      },

      set(value) {
        this.element.config.avatarID.value = value;
        this.onAvatarUpdate(value);
      }
    },
    name: {
      get() {
        return this.element.config.name.value;
      },

      set(value) {
        this.element.config.name.value = value;
      }
    },
    jobTitle: {
      get() {
        return this.element.config.jobTitle.value;
      },

      set(value) {
        this.element.config.jobTitle.value = value;
      }
    }
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('employee-card');
    },

    async onAvatarUpdate(value) {
      const media = await this.mediaRepository.get(value);
      this.element.config.avatarUrl.value = media.url;

      this.$emit('element-update', this.element);
    },

    onNameUpdate(value) {
      this.element.config.name.value = value;

      this.$emit('element-update', this.element);
    },


    onJobTitleUpdate(value) {
      this.element.config.jobTitle.value = value;

      this.$emit('element-update', this.element);
    },

    onEnabledUpdate(value) {
      this.element.config.enabled.value = value;

      this.$emit('element-update', this.element);
    }
  },
});
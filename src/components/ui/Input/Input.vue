<template>
  <fieldset class="input-wrapper" :class="{ 'input-wrapper_focused': focus }">
    <legend :class="{ legend_hidden: (!localValue && !focus) || !label }">
      {{ label }}
    </legend>
    <label
      v-if="label"
      class="input__label"
      :class="{ input__label_down: !value && !focus }"
      for="input"
      >{{ label }}</label
    >
    <input
      id="input"
      v-model="localValue"
      class="input"
      type="text"
      :placeholder="localPlaceholder"
      v-bind="$attrs"
      @focus="focus = true"
      @blur="focus = false"
      autocomplete="off"
    />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'Input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: [String],
      default: '',
    },
    placeholder: {
      type: [String],
      default: '',
    },
  },
  emits: ['update:value'],
  setup(props, context) {
    const focus = ref<boolean>(false)

    const localValue = computed({
      get: () => props.value,
      set: (val) => context.emit('update:value', val),
    })

    const localPlaceholder = computed(() =>
      !focus.value && props.label ? '' : props.placeholder
    )

    return { focus, localValue, localPlaceholder }
  },
})
</script>

<style scoped lang="scss">
.input-wrapper {
  color: var(--color-main-text);
  border: 2px solid currentColor;
  .input {
    width: 100%;
    font-size: 22px;
    border: 0;
    margin-bottom: 4px;
    height: 100%;
    padding: 4px 8px;
    &:focus {
      outline: none;
    }
  }
  .input__label {
    position: absolute;
    top: -14px;
    left: 10px;
    font-size: 14px;
    font-weight: 500;
    transition: 0.2s;
  }
  .input__label_down {
    top: 7px;
    font-size: 18px;
  }
}
.input-wrapper_focused {
  border-color: var(--color-primary);
  .input__label {
    color: var(--color-primary);
  }
}
</style>

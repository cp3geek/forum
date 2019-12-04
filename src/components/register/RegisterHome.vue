<template>
  <section>
    <b-steps type="is-info">
      <b-step-item label="Account" icon="account-key">
        <FirstStep />

        <img src="../../assets/401.gif" alt />
      </b-step-item>
      <b-step-item label="Profile" icon="account">
        <SecendStep />
      </b-step-item>
      <b-step-item label="Social" icon="account-plus">
        <ThirdStep />
        <img src="../../assets/401.gif" alt />
      </b-step-item>
    </b-steps>
  </section>
</template>


<script>
import FirstStep from "../register/FirstStep";
import SecendStep from "../register/SecendStep";
import ThirdStep from "../register/ThirdStep";
export default {
  components: {
    FirstStep,
    SecendStep,
    ThirdStep
  }
};
</script>


<style scoped>
</style>
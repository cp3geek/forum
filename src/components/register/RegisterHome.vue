<template>
  <section>
    <b-steps type="is-info">
      <b-step-item label="第一步" icon="account-key">
        <FirstStep />

        <img src="../../assets/401.gif" alt />
      </b-step-item>
      <b-step-item label="第二步" icon="account">
        <SecendStep />
      </b-step-item>
      <b-step-item label="第三步" icon="account-plus">
        <ThirdStep /><img src=https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646 alt />
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
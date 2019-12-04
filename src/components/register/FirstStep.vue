<template>
  <div class="first">
    <section>
      <b-field label="用户名" type="is-success" message="This username is available">
        <b-input value="johnsilver" maxlength="30"></b-input>
      </b-field>

      <b-field label="邮箱" type="is-danger" message="This email is invalid">
        <b-input type="email" value="john@" maxlength="30"></b-input>
      </b-field>

      <b-field
        label="密码"
        type="is-warning"
        :message="['Password is too short', 'Password must have at least 8 characters']"
      >
        <b-input value="123" type="password" maxlength="30"></b-input>
      </b-field>

      <b-field label="Subject">
        <b-select placeholder="Select a subject">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </b-select>
      </b-field>
    </section>
  </div>
</template>

<style scoped>
.first {
  text-align: center;
  float: left;
  width: 500px;
  height: 400px;
}
</style>
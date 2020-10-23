<template>
  <div>
    <section id="user-form">
      <div class="form-area">
        <div class="form-header">
          <div class="step-number">
            <p>Step:3</p>
          </div>
          <h2 class="form-message">ご相談内容をご記入ください</h2>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label for="consultasion" class="form-item">-ご相談内容-</label>
            <textarea
              name="consultasion"
              id="consultasion"
              rows="20"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-botton">
          <input class="form-control" type="submit" value="次へ進む" />
        </div>
        <router-link to="/question-form">
          <div class="return-botton">
            <input class="form-control" type="submit" value="戻る" />
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
#user-form {
  text-align: center;
}
.form-area {
  padding: 30px;
  border: solid 1px;
}
.form-group {
  margin: 20px;
}
</style>

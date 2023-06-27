<template>
    <v-card style="position: unset; margin-bottom: 20px;margin-top: 15px" class="d-flex" height="60" tile flat>
        <input type="text" class="input" :placeholder="placeholder" @keyup="sendData" v-model="inputValue">
        <v-img class="icon ml-3" src="@/assets/icons/search_icon.svg"></v-img>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
        inputValue: ''
    }
  },
  props: {
    placeholder: {
        type: String,
        default: ''
    }
  },
  methods: {
    sendData() {
        this.$emit("recieveData", this.inputValue);
    }
  }
}
</script>       

<style scoped>
.input {
    height: 60px;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 15px;
}
.icon {
    margin: auto 20px;
    padding: auto;
    cursor: pointer;
    height: 20px;
    width: 20px
}

</style>
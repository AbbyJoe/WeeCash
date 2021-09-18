<template>
  <section class="page-layout">
      <sidebar @toggle-sidebar="toggleSidebar" :visible="showSidebar" />
      <div class="main-content">
        <dash-navbar></dash-navbar>
        <div v-if="showError" @click="showError = !showError" class="alert alert-error">
            <p>{{ alertMsg === 'error' ? 'Please make a deposit. Your account does not have sufficient funds.' : null }}</p>
            <span>&times;</span>
        </div>
        <div v-if="show" @click="show = !show" class="alert alert-success">
            <p>{{ alertMsg }}</p>
            <span>&times;</span>
        </div>
        <div style="margin:0px 0px 10px 40px">
         <button class="button nav-opener" @click="toggleSidebar">O</button>
        </div>
         <div class="content-wrapper">
             <div class="card">
                 <div class="card-header">
                     <h1>Your Total Balance</h1>
                     <p class="header--balance">${{ totalBalance }}</p>
                     <p class="header--date">January 11 2021 - 09:20pm</p>
                     <p class="pills"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99702 0.659515L10.3329 1.99535L7.48618 4.84202L5.15285 2.50868L0.830349 6.83702L1.65285 7.65952L5.15285 4.15952L7.48618 6.49285L11.1612 2.82368L12.497 4.15952V0.659515H8.99702Z" fill="#01D066"/>
                    </svg>
                     +2.41%</p>
                 </div>
             </div>
             <div class="card">
                 <div class="card-header">
                     <h1>Your Total Withdrawals</h1>
                     <p class="header--balance">${{ amountWithdraw }}</p>
                     <p class="header--date">June 12 2021 - 04:20pm</p>
                     <p class="pills-error"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83034 7.04715L10.1662 5.71132L7.31951 2.86465L4.98618 5.19798L0.663677 0.86965L1.48618 0.0471497L4.98618 3.54715L7.31951 1.21382L10.9945 4.88298L12.3303 3.54715V7.04715H8.83034Z" fill="#FD3758"/>
                        </svg>
                        -4.27%</p>
                 </div>
             </div>
             <div class="card">
                 <h1 class="send--funds">Send Funds</h1>
                 <div class="input__container">
                    <label for="email" class="input__label">Recipent</label>
                    <input
                        id="text"
                        type="text"
                        name="text"
                        v-model="form.recipient"
                        placeholder="Enter your recipient"
                        class="input__field"
                    />
                    <p v-if="submitted && !$v.form.recipient.required" class="error__text">
                      This field is required
                    </p>
                </div>
                <div class="input__container">
                    <label for="email" class="input__label">Amount</label>
                    <input
                        id="amount"
                        type="text"
                        name="amount"
                        v-model="form.amount"
                        placeholder="Enter your amount"
                        class="input__field"
                    />
                    <p v-if="submitted && !$v.form.amount.required" class="error__text">
                      This field is required
                    </p>
                </div>
                <button type="button" @click="sendFunds" class="input__button">Send</button>
             </div>
         </div>
         <section class="section__wrapper">
             <div class="header">
          <h1>
            Transactions history
          </h1>
          <ul class="actions">
            <li>
              <appButton>
                <img src="@/assets/images/filter-icon.svg" alt="filter-icon" />
                Filter
              </appButton>
            </li>
            <li>
              <appButton>
                <img src="@/assets/images/export-icon.svg" alt="export-icon" />
                Export
              </appButton>
            </li>
            <li>
              <button @click="deposit" type="button" class="create-payment">
                <img src="@/assets/images/plus-icon.svg" alt="plus-icon" />
                Top Up Balance
              </button>
            </li>
          </ul>
        </div>
        <div class="payments">
          <div class="table-wrapper">
            <div class="table">
              <div class="table-header">
                <div class="column-name check">
                  <!-- CUSTOM CHECKBOX -->
                  <custom-check
                    @perform-action="selectAll"
                    id="checkAll"
                    :checked="false"
                  ></custom-check>
                </div>
                <div class="column-name amount">Amount</div>
                <div class="column-name description">Transaction Id</div>
                <div class="column-name customer">Customer</div>
                <div class="column-name date">date</div>
                <div class="column-name actions"></div>
              </div>
              <ul class="table-content">
                  <table-item></table-item>
                <tableItem
                  v-for="item in data"
                  :key="item.description"
                  :item="item"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="count">
            <p>{{data.length}} <span>results</span></p>
          </div>
          <div class="actions">
            <appButton :disabled="true">Previous</appButton>
            <appButton>Next</appButton>
          </div>
        </div>
        </section>
         
      </div>
  </section>
</template>

<script>
import dashNavbar from '../components/dashNavbar.vue'
import Sidebar from '../components/sidebar.vue'
import appButton from '../components/theButton.vue'
import customCheck from '../components/customCheck.vue'
import tableItem from '@/components/tableItem.vue'
const data = require('@/assets/static/data.json')
import { required } from 'vuelidate/lib/validators'
export default {
  components: { 
    dashNavbar,
    Sidebar,
    appButton,
    customCheck,
    tableItem,
  },
  data:() => ({
    showSidebar: false,
    submitted: false,
    show:false,
    showError:false,
    data: data,
    totalBalance: localStorage.getItem('totalBalance') || 0,
    amountWithdraw: localStorage.getItem('amountWithdraw') || 0,
    username: localStorage.getItem('userName') || 'Guest',
    form: {
      recipient: null,
      amount: null,
    },
    referenceNumber: null,
    alertMsg: null,
  }),
  validations: {
      form: {
        recipient: {
          required,
        },
        amount: {
          required,
        },
      },
    },
  methods: {
    toggleSidebar() {
    this.showSidebar = !this.showSidebar
    },
    selectAll() {
      this.data.forEach((item) => {
          item.checked = item.checked ? (item.checked = false) : (item.checked = true);
      })
    },
    // send money
    sendFunds() {
      this.submitted = true
      const invalid = this.$v.form.$invalid
      if (!invalid) {
        if(this.totalBalance <= 0 || this.form.amount > this.totalBalance) {
          this.showError = true
          this.alertMsg = 'error'
          setTimeout(() => {
            this.showError = false
          }, 5000)
          return;
        } else {
          this.amountWithdraw = parseInt(this.amountWithdraw) + parseInt(this.form.amount);
          this.totalBalance -= parseInt(this.form.amount);
          this.show = true;
          this.alertMsg = `You just sent $${this.form.amount} to ${this.form.recipient} from your wallet`
          setTimeout(() => {
            this.show = false;
          }, 5000)
          this.getReferenceNumber()
          this.data.unshift({
            description: this.referenceNumber,
            amount: this.form.amount,
            customer: this.form.recipient,
            date: new Date().toLocaleString()
          });
          this.resetForm();
        }
      }
    },
    deposit() {
      const deposit = prompt("How much are you depositing today?");
      if (deposit) {
        this.totalBalance += parseInt(deposit);
        this.show = true;
        this.alertMsg = `You just deposited $${deposit} into your wallet.`
        setTimeout(() => {
          this.show = false;
        }, 5000)
        this.getReferenceNumber()
        this.data.unshift({
          description: this.referenceNumber,
          amount: deposit,
          customer: this.username,
          date: new Date().toLocaleString()
        });
      } else {
        return;
      }
    },
    resetForm() {
      this.form.recipient = null
      this.form.amount = null;
      this.submitted = false
    },
    getReferenceNumber(){
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for( let i=0; i < 30; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.referenceNumber = text;
      }
    }
  }
}
</script>
<style scoped>
.page-layout {
    display: flex;
    align-items: flex-start;
    background: #F2F5FF;
    min-height: 100vh;
}
.page-layout .main-content {
    margin-left: 240px;
    flex: 1;
}
@media screen and (max-width: 1200px) {
    .page-layout .main-content {
        margin-left: 0;
}
}
.content-wrapper {
    padding: 0 40px;
    display: flex;
    gap: 20px;
    flex: 1;
}
.section__wrapper {
    padding: 0 40px;
}
.card {
    margin-bottom: 40px;
    background: #fff;
    border-radius: 5px;
    padding: 30px 20px;
    width: 100%;
    box-shadow: 0 35px 50px -30px rgba(0, 0, 0, 0.2);
}
.send--funds {
    font-size: 17px;
    font-weight: 600;
    color: #00003f;
    margin-bottom: 15px; 
    text-align: center;
}
.card-header {
    text-align: center;
}
.card-header h1 {
    font-size: 18px;
    font-weight: 600;
    color: #00003f;
    margin: 25px 0 20px 0;
}
.header--balance {
    font-size: 50px;
    font-weight: 700;
    color: #07074D;
    margin-bottom: 17px;
}
.header--date {
    font-size: 14px;
    font-weight: 400;
    color: rgba(88, 103, 141, 0.5);
}
.pills {
    margin: 15px auto;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    background:#d4ecda;
    color: #09B66D;
    display: flex;
    align-items: center;
    width: 70px;
}
.pills-error {
    margin: 10px auto;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #FD3758;
    width: 70px;
    display: flex;
    align-items: center;
    background: #f7d7da;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.header h1 {
    font-weight: 600;
    font-size: 19px;
    line-height: 33px;
    color:#07074D;
}
.header .actions {
    list-style: none;
    display: flex;
    gap: 8px;
}
.header .actions li .create-payment {
    text-decoration: none;
    border: 0;
    cursor: pointer;
    background: #07074D;
    box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px #07074D, 0px 1px 1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding: 8px 12px;
}
@media screen and (max-width: 576px) {
    .header {
        align-items: flex-start;
        flex-direction: column;
}
    .header .actions {
        margin-left: auto;
        margin-top: 8px;
}
}
.payments {
    margin-bottom: 20px;
}
.payments .table {
    border-top: 1px solid #a6adb4;
    border-bottom: 1px solid #a6adb4;
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
/* CUSTOM CSS SCROLLBAR */
}
.payments .table::-webkit-scrollbar {
    height: 8px;
    display: none;
}
.payments .table::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.payments .table::-webkit-scrollbar-thumb {
    background: #b6b6b6;
    border-radius: 100px;
}
.payments .table::-webkit-scrollbar-thumb:hover {
    background: #8e8e8e;
}
.payments .table .table-header {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 14px 0 14px 4px;
    width: 100%;
    border-bottom: 1px solid #a6adb4;
}
.payments .table .table-header .check {
    width: 20px;
    flex-shrink: 0;
}
.payments .table .table-header .amount {
    width: 195px;
    flex-shrink: 0;
}
.payments .table .table-header .description {
    flex: 0 0 40%;
    max-width: 40%;
    width: 100%;
    flex-shrink: 0;
}
.payments .table .table-header .customer {
    width: 170px;
    flex-shrink: 0;
}
.payments .table .table-header .date {
    width: 120px;
    flex-shrink: 0;
}
.payments .table .table-header .actions {
    margin-left: auto;
    flex-shrink: 0;
    text-align: right;
    padding-right: 16px;
}
.payments .table .table-header .column-name {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;
    color: #00003f;
}
.payments .table .table-header .column-name.amount {
    padding-left: 16px;
}
.payments .table .table-header .column-name.description {
    padding-left: 10px;
}
.payments .table .table-content {
    list-style: none;
}
.footer {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 27px;
}
.footer .count p {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #00003f;
}
.footer .count p span {
    font-weight: 400;
}
.footer .actions {
    display: flex;
    gap: 8px;
}
.page-layout .right-checkbox {
    background: #fff;
    height: 14px;
    width: 14px;
    box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}
.input__container {
  margin-bottom: 10px;
  width: 100%;
}
.input__label {
  font-size: 13px;
  width: 100%;
  display: block;
  margin-bottom: 10px;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #58678d;
}
.input__field {
  background-color: #ffffff;
  border: 1px solid #e4e9f2;
  box-sizing: border-box;
  width: 100%;
  height: 39px;
  padding-left: 15px;
  box-sizing: border-box;
  border-radius: 4px;
}
.input__field:focus {
    outline: #07074D;
}
.input__field:active {
  border: 1px solid #07074D;
}
.input__field::placeholder {
  color: rgba(88, 103, 141, 0.5);
  font-size: 15px;
  line-height: 20px;
}
.input__button {
  background-color: #07074D;
  border-radius: 5px;
  width: 100%;
  color: #fff;
  max-width: 100%;
  height: 39px;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
  border: 0;
  cursor: pointer;
}
.alert {
    position: absolute;
    top: 10px;
    right: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    padding:12px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    width: 400px;
}
.alert:hover {
  cursor: pointer;
}
.alert-success {
  color: #4F8A10;
  background-color: #DFF2BF;
  border: 1px solid darken(#DFF2BF, 15%);
}
.alert-error {
  color: #D8000C;
  background-color: #FFBABA;
  border: 1px solid darken(#FFBABA, 15%);
}
.error__text {
  color: red;
  margin-top: 5px;
}
@media screen and (max-width: 1200px) {
    .page-layout .right-checkbox {
        display: none;
    }
    }
    .nav-opener {
        display: none;
        font-size: 24px;
    }
    @media screen and (max-width: 1200px) {
        .nav-opener {
            display: inline-block;
    }
}
 
</style>
<template>
  <section class="page-layout">
      <sidebar @toggle-sidebar="toggleSidebar" :visible="showSidebar" />
      <div class="main-content">
        <dash-navbar></dash-navbar>
        <div style="margin:0px 0px 10px 40px">
         <button class="button nav-opener" @click="toggleSidebar">O</button>
        </div>
         <div class="content-wrapper">
             <div class="card">
                 <div class="card-header">
                     <h1>Your Total Balance</h1>
                     <p class="header--balance">$3222.10</p>
                     <p class="header--date">January 11 2021 - 09:20pm</p>
                     <p class="pills">+2.41%</p>
                 </div>
             </div>
             <div class="card">
                 <div class="card-header">
                     <h1>Money Withdrawal</h1>
                     <p class="header--balance">$1300.22</p>
                     <p class="header--date">June 12 2021 - 04:20pm</p>
                     <p class="pills-error">-4.27%</p>
                 </div>
             </div>
             <div class="card">
                 <div class="card-header">
                     <h1>Loan Offer</h1>
                     <p class="header--balance">$100</p>
                     <p class="header--date">January 11 2021 - 09:20pm</p>
                     <p class="pills">2.41%</p>
                 </div>
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
              <router-link to="/" class="create-payment">
                <img src="@/assets/images/plus-icon.svg" alt="plus-icon" />
                Create payment
              </router-link>
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
                <div class="column-name description">Description</div>
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

export default {
  components: { 
    dashNavbar,
    Sidebar,
    appButton,
    customCheck,
    tableItem,
  },
  data() {
    return {
    showSidebar: false,
    data: data,
    }
  },
  methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },
      selectAll() {
        this.data.forEach((item) => {
         item.checked = item.checked ? (item.checked = false) : (item.checked = true);
        })
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
.card-header {
    text-align: center;
}
.card-header h1 {
    font-size: 17px;
    font-weight: 600;
    color: #00003f;
    margin-bottom: 15px;
}
.header--balance {
    font-size: 40px;
    font-weight: 700;
    color: #07074D;
    margin-bottom: 14px;
}
.header--date {
    font-size: 14px;
    font-weight: 400;
    color: rgba(88, 103, 141, 0.5);
}
.pills {
    margin: 10px auto;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    background:#d4ecda;
    color: #09B66D;
    width: 50px;
}
.pills-error {
    margin: 10px auto;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    color: #723036;
    width: 50px;
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
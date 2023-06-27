<template>
  <v-app 
    :style="{background: $vuetify.theme.themes.dark.background}"
  >
    <ToolBar />
    <v-container style="margin-bottom: 55px">
        <AppBarMall />
    
        <v-row no-gutters style="margin-top:15px">
            <v-col cols="12" sm="12" md="6">
                <v-window v-model="step">
                    <v-window-item :value=1>
                        <v-row no-gutters
                            v-for="item_key in (Object.keys(cards))"
                            :key="item_key"
                            style="margin-bottom: 25px"
                        >
                            <v-card
                                outlined
                                width="100%"
                                style="background-color: transparent !important; padding: 15px;"
                            >
                                <v-row 
                                    no-gutters 
                                    style="
                                        display: flex; 
                                        align-items: center;
                                        margin-bottom: 5px;
                                ">
                                    <v-card-title class="outlined-card-title">{{ item_key }}</v-card-title>
                                    <v-spacer/>
                                    <v-checkbox 
                                        class="outlined-card-checkbox mt-n3"
                                        :ripple="false"
                                        color="#212135"
                                    />
                                </v-row>
                                <v-row 
                                    no-gutters
                                    style="margin-top: 10px;"
                                    v-for="(item_value, idx) in cards[item_key]"
                                    :key="item_value"
                                >
                                    <v-card 
                                        color="#FFFFFF"
                                        width="100%"
                                        height="170"
                                        elevation="0"
                                        style="padding: 10px;"
                                    >
                                        <div class="horizontal">
                                            <div class="horizontal-img">
                                                <v-img 
                                                    src="@/assets/images/sergi_card_img.png" 
                                                    style="border-radius: 3px;"
                                                    height="150"
                                                    width="200"
                                                />
                                            </div>
                                            <div class="horizontal-titles">
                                                <v-row no-gutters style="height: 30px;">
                                                    <v-card-title class="small-card-title">{{ item_value.title }}</v-card-title>
                                                    <v-spacer/>
                                                    <button type="button"
                                                        class="delete-button"
                                                        elevation="0"
                                                        @click="deleteItem(item_key, idx)"
                                                    >
                                                        <v-img 
                                                            src="@/assets/icons/delete.svg"
                                                            height="16"
                                                            width="12"
                                                            style="position: absolute;"
                                                        />
                                                    </button>
                                                </v-row>

                                                <v-row no-gutters style="margin-top: 5px;">
                                                    <v-card-title class="sm-bolder-title">Size:</v-card-title>
                                                    <v-card-title class="xs-bolder-title ml-1">{{ item_value.size }}</v-card-title>
                                                </v-row>

                                                <v-row no-gutters style="margin-top: 5px;">
                                                    <v-card-title class="sm-bolder-title">Color:</v-card-title>
                                                    <v-card-title class="xs-bolder-title ml-1">{{ item_value.color }}</v-card-title>
                                                </v-row>

                                                <v-row no-gutters style="margin-top: 30px;">
                                                    <v-card-title class="card-price">{{ item_value.price * item_value.count }} TMT</v-card-title>
                                                    <v-spacer/>
                                                    <div
                                                        style="
                                                            display: flex;
                                                            width: 100px;
                                                            justify-content: space-between;
                                                        "
                                                    >
                                                        <button type="button" class="count-btn" style="cursor: pointer;" @click="item_value.count > 1 ? item_value.count-- : item_value.count">-</button>
                                                        <div class="count-btn">{{ item_value.count }}</div>
                                                        <button type="button" class="count-btn" style="cursor: pointer;" @click="item_value.count++">+</button>
                                                    </div>
                                                </v-row>


                                            </div>
                                        </div>                                
                                    </v-card>
                                </v-row>
                            </v-card>
                        </v-row>
                    </v-window-item>
                    <v-window-item :value=2>
                        <v-card elevation="0" color="#FFFFFF" style="padding: 20px;">
                            <v-row no-gutters>
                                <v-card-title class="checkout-titles">Doly adyňyz</v-card-title>
                                <div class="input-borders">
                                    <input 
                                        type="text" 
                                        class="input-styles" 
                                        placeholder="Placeholder" 
                                        v-model="fullname"
                                        @change="fullnameFunc"
                                    >
                                </div>
                            </v-row>

                            <v-row no-gutters style="margin-top: 20px;">
                                <v-card-title class="checkout-titles">Telefon belgi</v-card-title>
                                <div class="input-borders">
                                    <input 
                                        type="text" 
                                        class="input-styles" 
                                        placeholder="Placeholder" 
                                        v-model="phone"
                                        @change="phoneFunc"
                                    >
                                </div>
                            </v-row>

                            <v-row no-gutters style="margin-top: 20px;">
                                <v-card-title class="checkout-titles">Salgy</v-card-title>
                                <div class="input-borders">
                                    <input 
                                        type="text" 
                                        class="input-styles" 
                                        placeholder="Placeholder" 
                                        v-model="address"
                                        @change="addressFunc"
                                    >
                                </div>
                            </v-row>

                            <v-row no-gutters style="margin-top: 20px;">
                                <v-card-title class="checkout-titles">
                                    Goşmaça
                                </v-card-title>
                            </v-row>
                            <v-row no-gutters>
                                <div class="textareas-div-style">
                                    <textarea 
                                        placeholder="Placeholder"
                                        class="textarea-styles pa-0"
                                    ></textarea>
                                </div>
                            </v-row>


                            <v-row no-gutters style="margin-top: 20px;">
                                <v-card-title class="checkout-titles">Töleg görnüşi</v-card-title>
                            </v-row>
                            <v-item-group mandatory>
                                <v-row no-gutters style="margin-top: 10px;">
                                    <v-item v-slot="{ active, toggle }">
                                        <v-card
                                            elevation="1"
                                            :color="active ? '#212135' : '#FFFFFF'"
                                            class="d-flex align-center justify-center"
                                            dark
                                            height="75"
                                            width="110"
                                            @click="toggle"
                                        >
                                            <v-row no-gutters justify="center">
                                                <v-icon
                                                    :color="active ? '#FFFFFF' : '#212135'"
                                                    size="30"
                                                >account_balance_wallet</v-icon>
                                            </v-row>

                                        </v-card>
                                    </v-item>

                                    <v-item v-slot="{ active, toggle }">
                                        <v-card
                                            elevation="1"
                                            :color="active ? '#212135' : '#FFFFFF'"
                                            class="d-flex align-center justify-center ml-5"
                                            dark
                                            height="75"
                                            width="110"
                                            @click="toggle"
                                        >
                                            <v-row no-gutters justify="center">
                                                <v-icon
                                                    :color="active ? '#FFFFFF' : '#212135'"
                                                    size="30"
                                                >credit_card</v-icon>
                                            </v-row>
                                        </v-card>
                                    </v-item>
                                </v-row>
                            </v-item-group>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-col>

            <v-col cols="12" sm="12" md="6" style="padding: 40px;">
                <v-card
                    elevation="0"
                    max-width="470"
                    height="278"
                    color="#FFFFFF"
                    class="pa-0"
                >
                    <v-row no-gutters align="center" justify="center">
                        <v-card-title class="kwitansiya-title">Квитанция</v-card-title>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row no-gutters 
                        style="padding: 20px 30px 10px 30px;"
                    >
                        <v-card-title class="kwitansiya-small-titles pa-0">Umumy Baha</v-card-title>
                        <v-spacer/>
                        <v-card-title class="kwitansiya-small-titles pa-0">{{ umumy_baha }} TMT</v-card-title>
                    </v-row>

                    <v-row no-gutters 
                        style="padding: 10px 30px 10px 30px;"
                    >
                        <v-card-title class="kwitansiya-small-titles pa-0">Eltip bermek</v-card-title>
                        <v-spacer/>
                        <v-card-title class="kwitansiya-small-titles pa-0">{{ eltip_berme_baha }} TMT</v-card-title>
                    </v-row>

                    <v-row no-gutters 
                        style="padding: 10px 30px 20px 30px;"
                    >
                        <v-card-title class="kwitansiya-bolder-titles pa-0">Jemi Baha</v-card-title>
                        <v-spacer/>
                        <v-card-title class="kwitansiya-bolder-titles pa-0">{{ jemi_baha }} TMT</v-card-title>
                    </v-row>
                    
                    <v-row no-gutters 
                        style="padding: 0px 30px 10px 30px;"
                    >
                        <v-btn 
                            color="#212135" 
                            width="100%" 
                            height="50" 
                            elevation="0" 
                            style="text-transform: unset !important;"
                            @click="nextWindow"
                        >
                            <span
                                style="
                                    font-size: 15px;
                                    line-height: 18px;
                                    font-weight: 700;
                                    color: #FFFFFF;
                                    letter-spacing: normal;
                                "
                            >
                                {{ step == 1 ? 'Dowamy' : 'Sargydy tamamla' }}</span>
                        </v-btn>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  <FooterComponent />
  </v-app>
</template>

<script src="./BasketPage.js"/>

<style scoped src="./BasketPage.css"/>
$(document).ready(function () {
$(this).scrollTop(0);

//Page Contents
var C_Home=$(".Content_Home");
var C_Shop=$(".Content_Shop");
var C_Learn=$(".Content_Learn");
var C_Contact=$(".Content_Contact");
var C_Achievements=$(".Content_Achievements");
var C_Stats=$(".Content_Stats");

//Page Button Links
var Home_Button=$(".Home");
var Shop_Button=$(".Shop");
var Learn_Button=$(".Learn");
var Contact_Button=$(".Contact");
var Achievements_Button=$(".Achievement");
var Stats_Button=$(".Stats");

//UL Items for "active" class
var li_Home=$(".li1");
var li_Shop=$(".li2");
var li_Learn=$(".li3");
var li_Contact=$(".li4");
var li_Achievements=$(".li5");
var li_Stats=$(".li6");

//Variables for Hidden Objects
var Shop_Sign=$(".Open_Logo");
var Achiv_Box=$(".Achievement-Box");

//Variables for Hidden Shop Sections
var Click_Upgrade_Container=$(".Click-Upgrade-Container");
var CPS_Upgrade_Container=$(".CPS-Upgrade-Container");
var Total_Upgrade_Container=$(".Total-Upgrade-Container");

//Variables for Buttons in Shop
var Click_Upgrade=$(".Click-Upgrade");
var CPS_Upgrade=$(".CPS-Upgrade");
var Total_Upgrade=$(".Total-Upgrade");

//Variables for Stats
var StatCode = $(".Stats-Code");
var StatCPS = $(".Stats-CPS");

//Variables for Shop Upgrades -->

//Clicking Upgrades
var ClickUpgrade_1 = $(".Click1_Upgrade");
var ClickUpgrade_2 = $(".Click2_Upgrade");
var ClickUpgrade_3 = $(".Click3_Upgrade");

//CPS Upgrades
var CPSUpgrade_1 = $(".CPS1_Upgrade");
var CPSUpgrade_2 = $(".CPS2_Upgrade");
var CPSUpgrade_3 = $(".CPS3_Upgrade");

//Total Upgrades
var TotalUpgrade_1 = $("#T1_Upgrade");
var TotalUpgrade_2 = $("#T2_Upgrade");
var TotalUpgrade_3 = $("#T3_Upgrade");

//To be shown after each other
TotalUpgrade_1.hide(); //Shown after buying the first golden upgrade
TotalUpgrade_2.hide();
TotalUpgrade_3.hide();

//Content Hidden
C_Shop.hide();
C_Learn.hide();
C_Contact.hide();
C_Achievements.hide();
C_Stats.hide();

Shop_Sign.hide(); 

Click_Upgrade_Container.hide();
CPS_Upgrade_Container.hide();
Total_Upgrade_Container.hide();

Achiv_Box.hide();

//Page Transitions on Button Clicks
Shop_Button.on("click", ShowShop);
function ShowShop() {
	C_Shop.fadeIn(500);
	li_Shop.addClass("active");
	Shop_Sign.fadeIn(2000);

	C_Home.fadeOut(100);
	C_Learn.fadeOut(100);
	C_Contact.fadeOut(100);
	C_Achievements.fadeOut(100);
	C_Stats.fadeOut(100);

	li_Home.removeClass("active");
	li_Learn.removeClass("active");
	li_Contact.removeClass("active");
	li_Achievements.removeClass("active");
	li_Stats.removeClass("active");
}

Home_Button.on("click", ShowHome);
function ShowHome() {
	C_Home.fadeIn(500);
	li_Home.addClass("active");

	C_Shop.fadeOut(100);
	C_Learn.fadeOut(100);
	C_Contact.fadeOut(100);
	C_Achievements.fadeOut(100);
	C_Stats.fadeOut(100);

	Shop_Sign.hide();

	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();
	
	li_Shop.removeClass("active");
	li_Learn.removeClass("active");
	li_Contact.removeClass("active");
	li_Achievements.removeClass("active");
	li_Stats.removeClass("active");
}

Learn_Button.on("click", ShowLearn);
function ShowLearn() {
	C_Learn.fadeIn(500);
	li_Learn.addClass("active");

	C_Shop.fadeOut(100);
	C_Home.fadeOut(100);
	C_Contact.fadeOut(100);
	C_Achievements.fadeOut(100);
	C_Stats.fadeOut(100);

	Shop_Sign.hide();

	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();
	
	li_Home.removeClass("active");
	li_Shop.removeClass("active");
	li_Contact.removeClass("active");
	li_Achievements.removeClass("active");
	li_Stats.removeClass("active");
}

Contact_Button.on("click", ShowContact);
function ShowContact() {
	C_Contact.fadeIn(500);
	li_Contact.addClass("active");

	C_Home.fadeOut(100);
	C_Learn.fadeOut(100);
	C_Shop.fadeOut(100);
	C_Stats.fadeOut(100);
	C_Achievements.fadeOut(100);

	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();

	li_Home.removeClass("active");
	li_Learn.removeClass("active");
	li_Shop.removeClass("active");
	li_Achievements.removeClass("active");
	li_Stats.removeClass("active");
}

Achievements_Button.on("click", ShowAchiv);
function ShowAchiv() {
	C_Achievements.fadeIn(500);
	li_Achievements.addClass("active");

	C_Home.fadeOut(100);
	C_Learn.fadeOut(100);
	C_Contact.fadeOut(100);
	C_Shop.fadeOut(100);
	C_Stats.fadeOut(100);

	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();

	li_Home.removeClass("active");
	li_Learn.removeClass("active");
	li_Contact.removeClass("active");
	li_Shop.removeClass("active");
	li_Stats.removeClass("active");
}

Stats_Button.on("click", ShowStats);
function ShowStats() {
	C_Stats.fadeIn(500);
	li_Stats.addClass("active");

	C_Home.fadeOut(100);
	C_Learn.fadeOut(100);
	C_Contact.fadeOut(100);
	C_Shop.fadeOut(100);
	C_Achievements.fadeOut(100);

	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();

	li_Home.removeClass("active");
	li_Learn.removeClass("active");
	li_Contact.removeClass("active");
	li_Shop.removeClass("active");
	li_Achievements.removeClass("active");
}

Click_Upgrade.on("click", ShowClickUpgrades);
function ShowClickUpgrades() {
	Shop_Sign.fadeOut(1);
	CPS_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();

	//Show Content
	Click_Upgrade_Container.fadeIn(2500);
}

CPS_Upgrade.on("click", ShowCPSUpgrades);
function ShowCPSUpgrades() {
	Shop_Sign.fadeOut(1);
	Click_Upgrade_Container.hide();
	Total_Upgrade_Container.hide();

	//Show Content
	CPS_Upgrade_Container.fadeIn(2500);
}

Total_Upgrade.on("click", ShowTotalUpgrades);
function ShowTotalUpgrades() {
	Shop_Sign.fadeOut(1);
	Click_Upgrade_Container.hide();
	CPS_Upgrade_Container.hide();

	//Show Content
	Total_Upgrade_Container.fadeIn(2500);
}

//Variables for Quote Generator
var Quotes=[
"We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins. - Ellen Ullman", 
"What one programmer can do in one month, two programmers can do in two months. - Fred Brooks", 
"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie", 
"Java is to JavaScript as ham is to hamster. -  Jeremy Keith, Resilient Web Design", 
"One of the best programming skills you can have is knowing when to walk away for awhile. - Oscar Godson"
];

var Quote_Text=$(".Quote");

setInterval(function(){
	var randomNumber = Math.floor(Math.random()*Quotes.length);
	Quote_Text.text(Quotes[randomNumber]);}
	,5500);

//Function for Contact Submit
var sendButton = $(".send");
sendButton.on("click", SubmitContact);
function SubmitContact() {
	alert("Thank you for your message !");
}

//Code Logistic Begins Here

var Code = 0; //Code Written
var TotalCode = 0; //For Stats
var Code_Text = $(".CodeNumber");

//Clickers
var Code_Button_1 = $(".Clicker_1");
var Code_Button_2 = $(".Clicker_2"); 
var Code_Button_3 = $(".Clicker_3");
Code_Button_2.hide();
Code_Button_3.hide();

//Variables for calculating resulting Code after upgrades
var Click_Upgrades = 1; //Default
var CPS_Upgrades = 0; //Default

Code_Button_1.on("click", Add);
function Add() {
	Code+=Click_Upgrades;
	Code_Text.text(Code);

	TotalCode+=Click_Upgrades;
	StatCode.text(TotalCode);

	//Variables for Code Animation on Click
	var xClick;
	var yClick;

	function Gen_CodeAnimationX() {return Math.floor(Math.random()*50);}
	function Gen_CodeAnimationY() {return Math.floor(Math.random()*70);}

	xClick = Gen_CodeAnimationX()+20;
	yClick = Gen_CodeAnimationY();

	var boostText = $('<h3 class="boostText" style="position: absolute; top:'+xClick+'%; left:'+yClick+'%;">'+'+'+Click_Upgrades+" Code"+'</h3>')
	ClickerBackground.append(boostText);
	boostText.animate({top: '-=35px', opacity: '0'}, 3000, function(){$(this).remove();});
}

Code_Button_2.on("click", Add);
Code_Button_3.on("click", Add);

//Achievements Ifs
var AchivText=$(".AchivText");

var A_1=false; //10 Code Written
var A_1_Icon=$(".A2");

var A_2=false; //100 Code Written
var A_2_Icon=$(".A3");

var A_3=false; //First Upgrade
var A_3_Icon = $(".A4");

var A_4=false; //1000 Code Written
var A_4_Icon = $(".A5");

var A_5=false; //First Golden Upgrade
var A_5_Icon = $(".A6");

var A_6=false; //First Total Upgrade
var A_6_Icon = $(".A7");

var A_7=false; //Second Total Upgrade
var A_7_Icon = $(".A8");

var A_8=false; //Third Total Upgrade
var A_8_Icon = $(".A9");

function Check_Achivs(){
	setInterval(function(){
		if(Code>=10 && !A_1) {
			A_1_Icon.css({"opacity": "1"});
			A_1=true;
			Achiv_Box.fadeIn(2500);
			AchivText.text("Code Padawan - Reached 10 written lines of code !");
			Achiv_Box.fadeOut(5500);
		}

		if(Code>=100 && !A_2) {
			A_2_Icon.css({"opacity": "1"});
			A_2=true;
			Achiv_Box.fadeIn(2500);
			AchivText.text("Code Initiate - Reached 100 written lines of code !");
			Achiv_Box.fadeOut(5500);
		}

		if(Code>=1000 && !A_4) {
			A_4_Icon.css({"opacity": "1"});
			A_4=true;
			Achiv_Box.fadeIn(2500);
			AchivText.text("Code Amateur - Reached 1000 written lines of code !");
			Achiv_Box.fadeOut(5500);
		}

	} ,500)
}

setInterval(Check_Achivs(), 250);


// End of Achievements Ifs

//CPS Interval
setInterval(function() {
	Code+=CPS_Upgrades;
	Code_Text.text(Code);

	TotalCode+=CPS_Upgrades;
	StatCode.text(TotalCode);
} ,900)


//Click Upgrade Functions
var TotalText = $(".TotalTextSoon");

var ClickUpgrade_Level1_Active=false;
ClickUpgrade_1.on("click", UpgradeClickLevel1);
function UpgradeClickLevel1() {
	if(Code >= 10){
		Code-=10;
		Code_Text.text(Code);
		ClickUpgrade_Level1_Active=true;
		Click_Upgrades*=2;

		if(!A_3) {
		Achiv_Box.fadeIn(2500);
		AchivText.text("First Upgrade - Bought your first upgrade !");
		Achiv_Box.fadeOut(5500);
		A_3_Icon.css({"opacity": "1"});
		A_3=true;
	}

		ClickUpgrade_1.attr("disabled", true);
		ClickUpgrade_1.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 10 lines !");}
}

var ClickUpgrade_Level2_Active=false;
ClickUpgrade_2.on("click", UpgradeClickLevel2);
function UpgradeClickLevel2() {
	if(Code >= 350){
		Code-=350;
		Code_Text.text(Code);
		ClickUpgrade_Level2_Active=true;
		Click_Upgrades+=2;

		ClickUpgrade_2.attr("disabled", true);
		ClickUpgrade_2.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 350 lines !");}
}

var ClickUpgrade_Level3_Active=false;
ClickUpgrade_3.on("click", UpgradeClickLevel3);
function UpgradeClickLevel3() {
	if(Code >= 1000){
		Code-=1000;
		Code_Text.text(Code);
		ClickUpgrade_Level3_Active=true;
		Click_Upgrades+=2;

		if(!A_5) {
		Achiv_Box.fadeIn(2500);
		AchivText.text("Golden Upgrade - Bought your first golden upgrade !");
		Achiv_Box.fadeOut(5500);
		A_5_Icon.css({"opacity": "1"});
		A_5=true;

		TotalText.hide();

		alert("You can buy your first OP Upgrade now !");

		TotalUpgrade_1.show();
	}

		ClickUpgrade_3.attr("disabled", true);
		ClickUpgrade_3.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 1000 lines !");}
}

// /Click Upgrade Functions

//CPS Upgrade Functions

var CPSUpgrade_Level1_Active=false;
CPSUpgrade_1.on("click", UpgradeCPSLevel1);
function UpgradeCPSLevel1() {
	if(Code >= 10){
		Code-=10;
		Code_Text.text(Code);
		CPSUpgrade_Level1_Active=true;
		CPS_Upgrades+=1;
		StatCPS.text(CPS_Upgrades);

		if(!A_3) {
		Achiv_Box.fadeIn(2500);
		AchivText.text("First Upgrade - Bought your first upgrade !");
		Achiv_Box.fadeOut(5500);
		A_3_Icon.css({"opacity": "1"});
		A_3=true;
	}

		CPSUpgrade_1.attr("disabled", true);
		CPSUpgrade_1.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 10 lines !");}
}

var CPSUpgrade_Level2_Active=false;
CPSUpgrade_2.on("click", UpgradeCPSLevel2);
function UpgradeCPSLevel2() {
	if(Code >= 500){
		Code-=500;
		Code_Text.text(Code);
		CPSUpgrade_Level2_Active=true;
		CPS_Upgrades+=1;
		StatCPS.text(CPS_Upgrades);

		CPSUpgrade_2.attr("disabled", true);
		CPSUpgrade_2.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 500 lines !");}
}

var CPSUpgrade_Level3_Active=false;
CPSUpgrade_3.on("click", UpgradeCPSLevel3);
function UpgradeCPSLevel3() {
	if(Code >= 2500){
		Code-=2500;
		Code_Text.text(Code);
		CPSUpgrade_Level1_Active=true;
		CPS_Upgrades*=2;
		StatCPS.text(CPS_Upgrades);

		if(!A_5) {
		Achiv_Box.fadeIn(2500);
		AchivText.text("Golden Upgrade - Bought your first golden upgrade !");
		Achiv_Box.fadeOut(5500);
		A_5_Icon.css({"opacity": "1"});
		A_5=true;

		TotalText.hide();

		alert("You can buy your first OP Upgrade now !");

		TotalUpgrade_1.show();
	}

		CPSUpgrade_3.attr("disabled", true);
		CPSUpgrade_3.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 2500 lines !");}
}

// /CPS Upgrade Functions


// Total Upgrade Functions
var ClickerBackground = $(".Col1");

function RandomXPos(){return Math.floor(Math.random()*70);}
function RandomYPos(){return Math.floor(Math.random()*600);}

function AddRandomBoost(){
	 var xPos = RandomXPos();
	 var yPos = RandomYPos();

	var boostButton = $('<img class="Bonus" src="img/image/click1.png" style="position: absolute; top:'+xPos+'vh; left:'+yPos+'px;" />')
	ClickerBackground.append(boostButton);

	setInterval(function() {
		boostButton.fadeOut(100);
	}, 2000);

	boostButton.on("click", GainBonus);
	function GainBonus() {
	boostButton.fadeOut(2500);

	var RandomBonus = Math.floor(Math.random()*150)

	alert("Clicked the Bonus Click, you gained"+" "+RandomBonus+" "+"Lines of Code !");

	Code+=RandomBonus;
	Code_Text.text(Code);
	TotalCode+=RandomBonus;

	var boostText = $('<h3 class="boostText" style="position: absolute; top:'+xPos+'vh; left:'+yPos+'px;">'+'+'+RandomBonus+" Code"+'</h3>')
	ClickerBackground.append(boostText);
	boostText.animate({top: '-=70px', opacity: '0'}, 4000, function(){$(this).remove();});
}

}

setInterval(function() 
	{
		AddRandomBoost();
	}
	, 35000);

TotalUpgrade_1.on("click", TotalUp1);
function TotalUp1() {
	if(Code >= 1500){
		Code-=1500;
		Code_Text.text(Code);

		Achiv_Box.fadeIn(2500);
		AchivText.text("First Total Upgrade - Bought your first total upgrade !");
		Achiv_Box.fadeOut(5500);
		A_6_Icon.css({"opacity": "1"});
		A_6=true;

		CPS_Upgrades+=2;
		Click_Upgrades+=2;
		StatCPS.text(CPS_Upgrades);

		Code_Button_1.fadeOut(250);
		Code_Button_2.fadeIn(1500);

		ClickerBackground.css("background", "url(img/image/Clicker_2_Background.gif)");

		Code_Text.css("background-color", "#114b28");

		TotalUpgrade_2.fadeIn(1000);

		TotalUpgrade_1.attr("disabled", true);
		TotalUpgrade_1.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 1500 lines !");}
}

TotalUpgrade_2.on("click", TotalUp2);
function TotalUp2() {
	if(Code >= 500){
		Code-=500;
		Code_Text.text(Code);

		Achiv_Box.fadeIn(2500);
		AchivText.text("Second Total Upgrade - Bought your second total upgrade !");
		Achiv_Box.fadeOut(5500);
		A_7_Icon.css({"opacity": "1"});
		A_7=true;

		CPS_Upgrades+=2;
		Click_Upgrades+=2;
		StatCPS.text(CPS_Upgrades);

		Code_Button_2.fadeOut(250);
		Code_Button_3.fadeIn(1500);

		ClickerBackground.css("background", "url(img/image/Clicker_3_Background.gif)");

		Code_Text.css("background-color", "#006f8b");

		TotalUpgrade_3.fadeIn(1000);

		TotalUpgrade_2.attr("disabled", true);
		TotalUpgrade_2.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 5500 lines !");}
}

TotalUpgrade_3.on("click", TotalUp3);
function TotalUp2() {
	if(Code >= 500){
		Code-=500;
		Code_Text.text(Code);

		Achiv_Box.fadeIn(2500);
		AchivText.text("Second Total Upgrade - Bought your golden total upgrade !");
		Achiv_Box.fadeOut(5500);
		A_8_Icon.css({"opacity": "1"});
		A_8=true;

		CPS_Upgrades+=5;
		Click_Upgrades+=5;
		StatCPS.text(CPS_Upgrades);

		Code_Button_3.fadeOut(250);

		ClickerBackground.css("background", "url(img/image/Clicker_3_Background.gif)");

		Code_Text.css("background-color", "#006f8b");

		TotalUpgrade_3.attr("disabled", true);
		TotalUpgrade_3.css("opacity", "0.2");
	}
	else{alert("You don't have enough code generated ! You need 5500 lines !");}
}

// /Total Upgrade Functions

});
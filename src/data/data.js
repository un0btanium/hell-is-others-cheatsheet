var data = {
	patchVersion: "1.1.6",
	npcs: [
        {
          name: "Cora",
          location: {
            address: ["Al Sadaqa"],
            x: 308,
            y: 100
          }
        },
        {
          name: "Jim",
          location: {
            address: ["Al Sadaqa", "Nechama Way"],
            x: 290,
            y: 150
          }
        },
        {
          name: "Dorothy",
          location: {
            address: ["Al Sadaqa", "Hurray Prospect"],
            x: 408,
            y: 152
          }
        },
        {
          name: "Casper",
          location: {
            address: ["Al Sadaqa", "Hurray Prospect", "Bank"],
            x: 370,
            y: 190
          }
        },
        {
          name: "Otis",
          location: {
            address: ["Al Sadaqa", "Hurray Prospect", "Bank"],
            x: 370,
            y: 202,
          },
		  showNameBelow: true
        },
        {
          name: "Conroy",
          location: {
            address: ["Jardin De La Paix"],
            x: 518,
            y: 108
          }
        },
        {
          name: "Karl",
          location: {
            address: ["Dünyevi Zevk"],
            x: 175, // TODO make more accurate
            y: 330
          }
        },
        {
          name: "Algernon",
          location: {
            address: ["Dünyevi Zevk"],
            x: 123,
            y: 428
          },
		  showNameBelow: true
        },
        {
          name: "Philippa",
          location: {
            address: ["Dünyevi Zevk"],
            x: 113,
            y: 414
          }
        },
        {
          name: "Howard",
          location: {
            address: ["Sword's End"],
            x: 324,
            y: 337
          },
		  showNameBelow: true
        },
		{
			name: "Martin",
			location: {
			  address: ["Sword's End", "Venture Boulevard"],
			  x: 292,
			  y: 460
			},
			showNameBelow: true
		},
		{
			name: "Deacon",
			location: {
			  address: ["Empress Square"],
			  x: 454,
			  y: 357
			}
		},
		{
			name: "Mary Anne",
			location: {
			  address: ["Snake Side"],
			  x: 584,
			  y: 340
			}
		},
		{
			name: "Jacob",
			location: {
			  address: ["Snake Side"],
			  x: 570,
			  y: 425
			},
			showNameBelow: true
		},
		{
			name: "Winston",
			location: {
			  address: ["Snake Side"],
			  x: 630,
			  y: 474
			}
		},
		{
			name: "Jonny",
			location: {
			  address: ["Kawai Wharf", "Venture Boulevard"],
			  x: 765,
			  y: 465
			}
		},
		{
			name: "Molly",
			location: {
			  address: ["La Cittadella", "Hope Century Hospital"],
			  x: 262,
			  y: 668
			},
			showNameBelow: true
		},
		{
			name: "Andre",
			location: {
			  address: ["La Cittadella", "Prudence Avenue"],
			  x: 104,
			  y: 710
			}
		},
		{
			name: "Stellan",
			location: {
			  address: ["La Cittadella", "Prudence Avenue"],
			  x: 274,
			  y: 710
			},
			showNameBelow: true
		},
		{
			name: "Maggie",
			location: {
			  address: ["Grapevine Complex", "Azadi Street"],
			  x: 614,
			  y: 695
			}
		},
		{
			name: "Bill",
			location: {
			  address: ["Prudence Avenue"],
			  x: 600,
			  y: 725
			}
		},
		{
			name: "Sandy",
			location: {
			  address: ["West Humble"],
			  x: 420, // TODO make more accurate
			  y: 862
			}
		},
		{
			name: "Huxley",
			location: {
			  address: ["East Humble"],
			  x: 640,
			  y: 906
			}
		},
		{
			name: "Mother Beranice",
			altName: "Beranice",
			location: {
			  address: ["East Humble", "Prudence Avuene", "Broken Chain Cementry"],
			  x: 700,
			  y: 894
			}
		},
		{
			name: "Lizzie",
			location: {
			  address: ["West Humble", "Las Cunas"],
			  x: 112,
			  y: 824
			}
		},
		{
			name: "Autumn",
			location: {
			  address: ["Mitleid Park", "Water Fountain"],
			  x: 454,
			  y: 667
			}
		}
	],
	locations: [
		{
			name: "Venture Boulevard",
			path: "M 28,488 L 834,488 L 834,541 L 24,541 L 28,488"
		},
		{
			name: "Saraswati",
			path: "M 22,26 L 225,26 L 225,223 L 22,223 L 22,26"
		},
		{
			name: "Al Sadaqa",
			path: "M 266,34 L 418,34 L 418,219 L 266,219 L 266,34"
		},
		{
			name: "Jardin De La Paix",
			path: "M 493,2 L 805,2 L 805,225 L 493,225 L 493,2",
			tags: ["bullets", "shrooms", "mushrooms"]
		},
		{
			name: "Hurray Prospect",
			path: "M 414,53 L 496,53 L 496,223 L 414,223 L 414,53"
		},
		{
			name: "Nechama Way",
			path: "M 226,46 L 267,46 L 267,221 L 226,221 L 226,46 M 222,310 L 271,310 L 271,488 L 223,488 L 223,310"
		},
		{
			name: "Chateau Constant",
			path: "M 669,67 L 771,67 L 771,205 L 669,205 L 669,67",
			tags: ["gold"]
		},
		{
			name: "Lättnad Bridge",
			path: "M 223,234 L 270,234 L 270,320 L 223,320 L 223,234"
		},
		{
			name: "Dünyevi Zevk",
			path: "M 2,309 L 226,309 L 226,489 L 2,489 L 2,309"
		},
		{
			name: "Garden of Simples",
			path: "M 133,405 L 218,405 L 218,485 L 133,485 L 133,405",
			tags: ["bullets", "shrooms", "mushrooms"]
		},
		{
			name: "Sword's End",
			path: "M 271,311 L 409,311 L 409,404 L 435,404 L 435,482 L 273,482 L 273,311"
		},
		{
			name: "Snake Side",
			path: "M 499,311 L 643,311 L 643,485 L 482,485 L 482,402 L 499,402 L 499,311"
		},
		{
			name: "Kawai Wharf",
			path: "M 702,310 L 832,310 L 832,490 L 702,490 L 702,310"
		},
		{
			name: "Square Imperial",
			path: "M 410,313 L 496,313 L 496,398 L 410,398 L 410,313"
		},
		{
			name: "Park Mitleid",
			path: "M 377,549 L 533,549 L 533,746 L 377,746 L 377,546",
			tags: ["bullets", "shrooms", "mushrooms"]
		},
		{
			name: "La Cittadella",
			path: "M 5,548 L 332,548 L 332,741 L 5,741 L 5,548"
		},
		{
			name: "Hope Century Hospital",
			path: "M 210,547 L 313,547 L 313,676 L 210,676 L 210,547",
			tags: ["blood", "pills", "medkits", "bandages"]
		},
		{
			name: "Prudence Avenue",
			path: "M 62,745 L 800,745 L 800,785 L 62,785 L 62,745"
		},
		{
			name: "Torquetum Yard",
			path: "M 700,546 L 852,546 L 852,739 L 700,739 L 700,546"
		},
		{
			name: "West Humble",
			path: "M 51,789 L 430,789 L 430,907 L 51,907 L 51,789"
		},
		{
			name: "Baker Road",
			path: "M 436,784 L 473,784 L 473,900 L 428,900 L 428,784"
		},
		{
			name: "East Humble",
			path: "M 474,785 L 759,785 L 759,952 L 474,952 L 474,785"
		},
		{
			name: "Broken Chain Cementry",
			path: "M 653,789 L 751,789 L 751,953 L 653,953 L 653,789",
			tags: ["bullets"]
		},
		{
			name: "Bellocanto House Threatre",
			path: "M 290,799 L 371,799 L 371,898 L 290,898 L 290,799",
			tags: ["cockroaches", "snacks"]
		},
		{
			name: "Las Cunas",
			path: "M 144,793 L 176,793 L 176,890 L 144,890 L 144,793"
		},
		{
			name: "Baker Street",
			path: "M 335,548 L 371,548 L 371,747 L 335,747 L 335,548"
		},
		{
			name: "Azadi Street",
			path: "M 532,548 L 570,548 L 570,746 L 532,746 L 532,548"
		},
		{
			name: "Reeds Canal",
			path: "M 653,314 L 698,314 L 698,739 L 653,739 L 653,314"
		},
		{
			name: "Ureshinaki Bridge",
			path: "M 640,428 L 711,428 L 711,444 L 640,444 L 640,428"
		},
		{
			name: "Grapevine Complex",
			path: "M 575,545 L 651,545 L 651,740 L 575,740 L 575,545",
			tags: ["office", "cockroaches"]
		},
		{
			name: "Million Bridge",
			path: "M 428,221 L 477,221 L 477,304 L 428,304 L 428,221"
		},
		{
			name: "Commissariat Du XIIe", // TODO name?
			path: "M 701,548 L 766,548 L 766,631 L 701,631 L 701,548"
		},
		{
			name: "Jineung Bridge ",
			path: "M 643,625 L 703,625 L 703,647 L 643,647 L 643,625"
		},
		{
			name: "Saraswati Hall",
			path: "M 125,30 L 191,30 L 191,97 L 125,97 L 125,30",
			tags: ["fertilizer"]
		},
		{
			name: "Zavtra River",
			path: "M 77,230 L 803,230 L 803,302 L 77,302 L 77,230"
		},
		{
			name: "Anavasi Passage",
			path: "M 445,409 L 471,409 L 471,483 L 445,483 L 445,409",
			tags: ["bullets"]
		},
		{
			path: "M 556,158 L 595,157 L 595,174 L 588,182 L 562,182 L 556,176 L 556,158",
			tags: ["modified bullets", "fertilizer", "meds"]
		},
		{
			path: "M 703,317 L 757,317 L 757,344 L 747,344 L 747,382 L 772,382 L 772,423 L 706,423 L 706,317",
			tags: ["hardware", "tools"]
		},
		{
			path: "M 118,676 L 225,676 L 225,694 L 118,694 L 118,676",
			tags: ["bullets"]
		},
		{
			path: "M 59,798 L 76,798 L 76,852 L 84,852 L 84,868 L 120,868 L 120,859 L 127,859 L 127,844 L 135,844 L 135,819 L 127,819 L 127,800 L 143,800 L 143,879 L 59,879 L 59,798",
			tags: ["bullets"]
		},
		{
			path: "M 177,800 L 193,800 L 193,820 L 186,820 L 186,845 L 201,845 L 201,879 L 177,879 L 177,800",
			tags: ["bullets"]
		},
		{
			path: "M 243,799 L 254,799 L 254,842 L 244,842 L 244,799",
			tags: ["bullets"]
		},
		{
			path: "M 244,613 L 278,613 L 278,642 L 244,642 L 244,613",
			tags: ["bullets"]
		},
		{
			path: "M 246,664 L 284,664 L 284,676 L 246,676 L 246,664",
			tags: ["modified bullets"]
		},
		{
			path: "M 705,607 L 736,607 L 736,627 L 705,627 L 705,607",
			tags: ["guns", "weapons", "pistols"]
		},
		{
			path: "M 4,410 L 127,410 L 127,474 L 4,474 L 4,410",
			tags: ["office"]
		},
		{
			path: "M 325,885 L 334,885 L 334,894 L 325,894 L 325,885",
			tags: ["fertilizer"]
		}
	],
	atms: [
		{
			x: 775,
			y: 413,
			showNameBelow: true
		},
		{
			x: 94,
			y: 745,
			showNameBelow: true
		},
		{
			x: 593,
			y: 378,
			showNameBelow: true
		},
		{
			x: 373,
			y: 880,
			showNameBelow: true
		},
		{
			x: 618,
			y: 924,
			showNameBelow: true
		},
		{
			x: 577,
			y: 733,
			showNameBelow: true
		},
		{
			x: 71,
			y: 564
		},
		{
			x: 106,
			y: 363
		},
		{
			x: 267,
			y: 174,
			showNameBelow: true
		},
		{
			x: 418,
			y: 97,
			showNameBelow: true
		},
		{
			x: 406,
			y: 353
		},
		{
			x: 310,
			y: 315
		},
		{
			x: 271,
			y: 638
		},
		{
			x: 833,
			y: 561
		}
	],
	shops: [
		{
			name: "Bank",
			tags: ["money"],
			img: "./icons/Icon_Bank.png",
			x: 399,
			y: 195
		},
		{
			name: "Fertilizer Shop",
			tags: ["fertilizer"],
			img: "./icons/Icon_Fertilizer.png",
			x: 381,
			y: 150
		},
		{
			name: "Fast Food",
			tags: ["food", "healing"],
			img: "./icons/Icon_Fast_Food.png",
			x: 274,
			y: 154
		},
		{
			name: "Pottery Shop",
			tags: ["pots"],
			img: "./icons/Icon_Pottery.png",
			x: 308,
			y: 104
		},
		{
			name: "Carpentry Workshop",
			tags: [],
			img: "./icons/Icon_Carpentry.png",
			x: 325,
			y: 321
		},
		{
			name: "Bar",
			tags: ["drink", "energizer"],
			img: "./icons/Icon_Bar.png",
			x: 180,
			y: 356
		},
		{
			name: "Guideshop",
			tags: [],
			img: "./icons/Icon_Guideshop.png",
			x: 114,
			y: 443
		},
		{
			name: "Pharmacy",
			tags: ["pills"],
			img: "./icons/Icon_Pharmacy.png",
			x: 288,
			y: 480
		},
		{
			name: "Large Caliber Weapon Shop",
			tags: ["weapons", "guns"],
			img: "./icons/Icon_Large_Caliber_Weapons.png",
			x: 579,
			y: 359
		},
		{
			name: "Art Store",
			tags: ["paintings"],
			img: "./icons/Icon_Art.png",
			x: 607,
			y: 476
		},
		{
			name: "Supermarket",
			tags: ["food", "healing", "health"],
			img: "./icons/Icon_Supermarket.png",
			x: 729,
			y: 460
		},
		{
			name: "Infirmary",
			tags: ["health", "healing", "medkits", "bandages"],
			img: "./icons/Icon_Infirmary.png",
			x: 259,
			y: 644
		},
		{
			name: "Hardware Shop",
			tags: ["explosives", "mines", "grenades"],
			img: "./icons/Icon_Hardware.png",
			x: 102,
			y: 725
		},
		{
			name: "Bakery",
			tags: ["food", "healing", "health"],
			img: "./icons/Icon_Bakery.png",
			x: 397,
			y: 864
		},
		{
			name: "Small Caliber Weapon Shop",
			tags: ["guns", "weapons", "pistol"],
			img: "./icons/Icon_Small_Caliber_Weapons.png",
			x: 612,
			y: 731
		},
		{
			name: "Furnature Shop",
			tags: [],
			img: "./icons/Icon_Furnature.png",
			x: 620,
			y: 905
		},
		{
			name: "Church",
			tags: [],
			img: "./icons/Icon_Church.png",
			x: 700,
			y: 846
		}
	],
	elevators: [
		{
			x: 180,
			y: 171
		},
		{
			x: 339,
			y: 193
		},
		{
			x: 383,
			y: 57
		},
		{
			x: 105,
			y: 321
		},
		{
			x: 282,
			y: 370
		},
		{
			x: 381,
			y: 355
		},
		{
			x: 296,
			y: 435
		},
		{
			x: 530,
			y: 356
		},
		{
			x: 614,
			y: 376
		},
		{
			x: 578,
			y: 450
		},
		{
			x: 150,
			y: 620
		},
		{
			x: 170,
			y: 709
		},
		{
			x: 302,
			y: 700
		},
		{
			x: 777,
			y: 560
		},
		{
			x: 739,
			y: 734
		}
	]
};
export default data;
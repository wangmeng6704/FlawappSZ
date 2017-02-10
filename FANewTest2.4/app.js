angular
	.module('app', ['ngMaterial', 'ngMessages', 'data-table', 'ngResource', 'angular-virtual-keyboard'])
	//	.value("API_HOST", "http://cas.fupy.com.cn")
	.value("API_HOST", "http://10.17.111.18:81")
	.value("All_Time", ['0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24'])
	.value("HEKE", ['TOP', 'F', 'M', 'L'])
	.value("MODELS", [{
		id: 0,
		mainCategory: '款式',
		productName: '拉链外套'
	}, {
		id: 1,
		mainCategory: '款式',
		productName: '带帽外套'
	}, {
		id: 2,
		mainCategory: '款式',
		productName: '短袖-圆领'
	}, {
		id: 3,
		mainCategory: '款式',
		productName: '短袖-翻领'
	}, {
		id: 4,
		mainCategory: '款式',
		productName: '长袖-圆领'
	}, {
		id: 5,
		mainCategory: '款式',
		productName: '长袖-翻领'
	}, {
		id: 6,
		mainCategory: '款式',
		productName: '短裤'
	}, {
		id: 7,
		mainCategory: '款式',
		productName: '长裤'
	}])
	.value("TEMPLATES", [
		[{
			pos: "front",
			img: "./img/1.png",
			position: ["领", "袖子", "袖口", "大身(前)", "下摆"],
			block: [
				["C1", "C2", "D1"],
				["A6", "A7", "A8", "B6", "B7", "D2", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "F4", "F5", "F6", "F7", "F8"],
				["A9", "E9", "E10", "F9", "F10"],
				["B3", "B4", "B5", "B8", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
				["B9", "B10", "C9", "C10", "D9", "D10"]
			]
		}, {
			pos: "back",
			img: "./img/2.png",
			position: ["领", "袖子", "袖口", "大身(后)", "下摆"],
			block: [
				["C1", "C2", "D1", "D2"],
				["A4", "A5", "A6", "A7", "A8", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "F7", "F8"],
				["A9", "B9", "A10", "B10", "E9", "E10", "F9", "F10"],
				["B3", "B4", "B5", "B6", "B7", "B8", "C3", "C4", "C5", "C6", "C7", "C8", "D3", "D4", "D5", "D6", "D7", "D8"],
				["C9", "C10", "D9"]
			]
		}],
		[{
			pos: "front",
			img: "./img/3.png",
			position: ["帽", "领", "袖子", "袖口", "大身(前)", "下摆"],
			block: [
				["B1", "B2", "C1", "C2", "D1", "D2"],
				["B3", "C3", "D3"],
				["A5", "A6", "A7", "A8", "B4", "B5", "B6", "B7", "D4", "E4", "E5", "E6", "E7", "E8", "E9"],
				["A9", "A10", "E10"],
				["B8", "C4", "C5", "C6", "C7", "C8", "D5", "D6", "D7", "D8"],
				["B9", "C9", "D9"]
			]
		}, {
			pos: "back",
			img: "./img/4.png",
			position: ["帽", "领", "袖子", "袖口", "大身(后)", "下摆"],
			block: [
				["C1", "C2", "C3", "D1", "D2", "D3"],
				[],
				["A4", "A5", "A6", "A7", "A8", "B4", "B5", "B6", "E4", "E5", "E6", "E7", "E8", "E9"],
				["A9", "B9", "B10", "E10", "F10"],
				["B7", "B8", "C4", "C5", "C6", "C7", "C8", "D4", "D5", "D6", "D7", "D8"],
				["C9", "D9"]
			]
		}],
		[{
			pos: "front",
			img: "./img/5.png",
			position: ["领", "袖子", "大身(前)", "下摆"],
			block: [
				["C1", "C2", "D1", "D2"],
				["A2", "A3", "A4", "E1", "E2", "E3", "F3", "F4"],
				["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "E5", "E6", "E7", "E8", "E9"],
				["B10", "C10", "D10", "E10"]
			]
		}, {
			pos: "back",
			img: "./img/6.png",
			position: ["领", "袖子", "大身(后)", "下摆"],
			block: [
				["C1", "C2", "D1", "D2"],
				["A2", "A3", "A4", "A5", "E2", "E3", "E4", "F3", "F4", "F5"],
				["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "E6", "E7", "E8", "E9"],
				["B10", "C10", "D10", "E10"]
			]
		}],
		[{
			pos: "front",
			img: "./img/7.png",
			position: ["领", "袖子", "大身(前)", "下摆"],
			block: [
				["B1", "B2", "C1", "C2"],
				["A4", "A5", "E2", "E3", "E4", "E5", "E6", "F4", "F5"],
				["A2", "A3", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
				["A10", "B10", "C10", "D10"]
			]
		}, {
			pos: "back",
			img: "./img/8.png",
			position: ["领", "袖子", "大身(后)", "下摆"],
			block: [
				["C1", "D1"],
				["A2", "A3", "A4", "A5", "E3", "E4", "E5", "F3", "F4", "F5"],
				["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "E6", "E7", "E8", "E9"],
				["B10", "C10", "D10", "E10"]
			]
		}],
		[{
			pos: "front",
			img: "./img/9.png",
			position: ["领", "袖子", "大身(前)", "下摆"],
			block: [
				["B1", "C1", "C2", "D1"],
				["A3", "A4", "A5", "A6", "A7", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
				["B2", "B3", "B4", "B5", "B6", "B7", "B8", "C3", "C4", "C5", "C6", "C7", "C8", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
				["B9", "B10", "C9", "C10", "D9", "D10"]
			]
		}, {
			pos: "back",
			img: "./img/10.png",
			position: ["领", "袖子", "大身(后)", "下摆"],
			block: [
				["C1", "D1"],
				["A2", "A3", "A4", "A5", "A6", "A7", "A8", "E2", "E3", "E4", "E5", "E6", "E8", "E9", "F7", "F8", "F9"],
				["B2", "B3", "B4", "B5", "B6", "B7", "B8", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
				["B9", "B10", "C9", "C10", "D9", "D10"]
			]
		}],
		[{
			pos: "front",
			img: "./img/11.png",
			position: ["领", "袖子", "大身(前)", "下摆"],
			block: [
				["C1", "C2", "D1"],
				["A5", "A6", "A7", "A8", "A9", "A10", "B3", "B4", "B5", "B6", "B7", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "F4", "F5", "F6", "F7", "F8"],
				["B2", "B8", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
				["B9", "B10", "C9", "C10", "D9", "D10"]
			]
		}, {
			pos: "back",
			img: "./img/12.png",
			position: ["领", "袖子", "大身(后)", "下摆"],
			block: [
				["B1", "C1", "D1"],
				["A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "F7", "F8", "F9", "F10"],
				["B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
				["B10", "C10", "D10"]
			]
		}],
		[{
			pos: "front",
			img: "./img/13.png",
			position: ["腰", "前片", "脚口"],
			block: [
				["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2"],
				["A3", "A4", "A5", "A6", "A7", "A8", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "F3", "F4", "F5", "F6", "F7", "F8", "F9"],
				["A9", "A10", "B10", "C10", "D10", "E10", "F10"]
			]
		}, {
			pos: "back",
			img: "./img/14.png",
			position: ["腰", "后片", "脚口"],
			block: [
				["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2"],
				["A3", "A4", "A5", "A6", "A7", "A8", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "F3", "F4", "F5", "F6", "F7", "F8", "F9"],
				["A9", "A10", "B10", "C10", "D10", "E10", "F10"]
			]
		}],
		[{
			pos: "front",
			img: "./img/15.png",
			position: ["腰", "前片", "脚口"],
			block: [
				["B1", "B2", "C1", "C2", "D1", "D2"],
				["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B3", "B4", "B5", "B6", "B7", "B8", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
				["A9", "B9", "B10", "C10", "D10"]
			]
		}, {
			pos: "back",
			img: "./img/16.png",
			position: ["腰", "后片", "脚口"],
			block: [
				["B1", "B2", "C1", "C2", "D1"],
				["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B3", "B4", "B5", "B6", "B7", "B8", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
				["A9", "A10", "B9", "B10", "C10", "D10"]
			]
		}]
	])
	.value("SIT", [{
		a: 10,
		b: 15,
		c: 330,
		d: 465
	}, {
		a: 0,
		b: 0,
		c: 345,
		d: 490
	}, {
		a: 0,
		b: 0,
		c: 330,
		d: 495
	}, {
		a: 0,
		b: 0,
		c: 330,
		d: 495
	}, {
		a: 0,
		b: 0,
		c: 330,
		d: 500
	}, {
		a: 0,
		b: 0,
		c: 330,
		d: 500
	}, {
		a: 0,
		b: 0,
		c: 340,
		d: 495
	}, {
		a: 0,
		b: 0,
		c: 335,
		d: 500
	}])
	.value('AQL', [{
		AQL: 1.0,
		SampleLotStart: 2,
		SampleLotEnd: 8,
		SampleSize: 2,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 9,
		SampleLotEnd: 15,
		SampleSize: 3,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 16,
		SampleLotEnd: 25,
		SampleSize: 5,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 26,
		SampleLotEnd: 50,
		SampleSize: 8,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 51,
		SampleLotEnd: 90,
		SampleSize: 13,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 90,
		SampleLotEnd: 150,
		SampleSize: 20,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 151,
		SampleLotEnd: 280,
		SampleSize: 32,
		Accept: 0
	}, {
		AQL: 1.0,
		SampleLotStart: 281,
		SampleLotEnd: 500,
		SampleSize: 50,
		Accept: 1
	}, {
		AQL: 1.0,
		SampleLotStart: 501,
		SampleLotEnd: 1200,
		SampleSize: 80,
		Accept: 2
	}, {
		AQL: 1.0,
		SampleLotStart: 1201,
		SampleLotEnd: 3200,
		SampleSize: 125,
		Accept: 3
	}, {
		AQL: 1.0,
		SampleLotStart: 3201,
		SampleLotEnd: 10000,
		SampleSize: 200,
		Accept: 5
	}, {
		AQL: 1.0,
		SampleLotStart: 10001,
		SampleLotEnd: 'over',
		SampleSize: 315,
		Accept: 7
	}, {
		AQL: 1.5,
		SampleLotStart: 2,
		SampleLotEnd: 8,
		SampleSize: 2,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 9,
		SampleLotEnd: 15,
		SampleSize: 3,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 16,
		SampleLotEnd: 25,
		SampleSize: 5,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 26,
		SampleLotEnd: 50,
		SampleSize: 8,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 51,
		SampleLotEnd: 90,
		SampleSize: 13,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 90,
		SampleLotEnd: 150,
		SampleSize: 20,
		Accept: 0
	}, {
		AQL: 1.5,
		SampleLotStart: 151,
		SampleLotEnd: 280,
		SampleSize: 32,
		Accept: 1
	}, {
		AQL: 1.5,
		SampleLotStart: 281,
		SampleLotEnd: 500,
		SampleSize: 50,
		Accept: 2
	}, {
		AQL: 1.5,
		SampleLotStart: 501,
		SampleLotEnd: 1200,
		SampleSize: 80,
		Accept: 3
	}, {
		AQL: 1.5,
		SampleLotStart: 1201,
		SampleLotEnd: 3200,
		SampleSize: 125,
		Accept: 5
	}, {
		AQL: 1.5,
		SampleLotStart: 3201,
		SampleLotEnd: 10000,
		SampleSize: 200,
		Accept: 7
	}, {
		AQL: 1.5,
		SampleLotStart: 10001,
		SampleLotEnd: 'over',
		SampleSize: 315,
		Accept: 10
	}, {
		AQL: 2.0,
		SampleLotStart: 2,
		SampleLotEnd: 8,
		SampleSize: 2,
		Accept: 0
	}, {
		AQL: 2.0,
		SampleLotStart: 9,
		SampleLotEnd: 15,
		SampleSize: 3,
		Accept: 0
	}, {
		AQL: 2.0,
		SampleLotStart: 16,
		SampleLotEnd: 25,
		SampleSize: 5,
		Accept: 0
	}, {
		AQL: 2.0,
		SampleLotStart: 26,
		SampleLotEnd: 50,
		SampleSize: 8,
		Accept: 0
	}, {
		AQL: 2.0,
		SampleLotStart: 51,
		SampleLotEnd: 90,
		SampleSize: 13,
		Accept: 0
	}, {
		AQL: 2.0,
		SampleLotStart: 90,
		SampleLotEnd: 150,
		SampleSize: 20,
		Accept: 1
	}, {
		AQL: 2.0,
		SampleLotStart: 151,
		SampleLotEnd: 280,
		SampleSize: 32,
		Accept: 2
	}, {
		AQL: 2.0,
		SampleLotStart: 281,
		SampleLotEnd: 500,
		SampleSize: 50,
		Accept: 3
	}, {
		AQL: 2.0,
		SampleLotStart: 501,
		SampleLotEnd: 1200,
		SampleSize: 80,
		Accept: 4
	}, {
		AQL: 2.0,
		SampleLotStart: 1201,
		SampleLotEnd: 3200,
		SampleSize: 125,
		Accept: 5
	}, {
		AQL: 2.0,
		SampleLotStart: 3201,
		SampleLotEnd: 10000,
		SampleSize: 200,
		Accept: 10
	}, {
		AQL: 2.0,
		SampleLotStart: 10001,
		SampleLotEnd: 'over',
		SampleSize: 315,
		Accept: 14
	}, ])
	.value("NODE", ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'])
	.service('api', ['$resource', 'API_HOST',
		function($resource, API_HOST) {
			return {
				login: $resource(API_HOST + '/oauth2/login', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				productionLine: $resource(API_HOST + '/oauth2/getProductionLine', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				defectType: $resource(API_HOST + '/oauth2/getDefectTypeEnglish_CN', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				defectCode: $resource(API_HOST + '/oauth2/getDefectCode', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				getRFIDInfo: $resource(API_HOST + '/oauth2/getRFIDInfo', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				postDefectList: $resource(API_HOST + '/oauth2/getPostDefectList', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				sendMessage: $resource(API_HOST + '/oauth2/sendMessage', null, {
					post: {
						method: 'post',
						isArray: true
					}
				}),
				productionLineContractList: $resource(API_HOST + '/oauth2/getProductionLineContractList', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				getOutput: $resource(API_HOST + '/oauth2/getOutput', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),

				postFlawTable: $resource(API_HOST + '/oauth2/postFlawTable', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				postFlawDetail: $resource(API_HOST + '/oauth2/postFlawDetail', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				changeFlawTable: $resource(API_HOST + '/oauth2/changeFlawTable', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				changeFlawDetail: $resource(API_HOST + '/oauth2/changeFlawDetail', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				query1: $resource(API_HOST + '/oauth2/query1', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				query2: $resource(API_HOST + '/oauth2/query2', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				queryDetail: $resource(API_HOST + '/oauth2/queryDetail', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				styleType: $resource(API_HOST + '/oauth2/getStyleType', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				stylePart: $resource(API_HOST + '/oauth2/getStylePart', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				finalTable: $resource(API_HOST + '/oauth2/FinalTable', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),

				finalDetail: $resource(API_HOST + '/oauth2/FinalDetail', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				packageDetail: $resource(API_HOST + '/oauth2/Package_Detail', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),

				packageTable: $resource(API_HOST + '/oauth2/Package_Tabel', null, {
					post: {
						method: 'post',
						isArray: false
					}
				}),
				getPo: $resource(API_HOST + '/oauth2/getCustomerPO', null, {
					get: {
						method: 'post',
						isArray: true
					}
				}),
				getSize: $resource(API_HOST + '/oauth2/getSizeColor', null, { //getFEPOSizeColor
					get: {
						method: 'post',
						isArray: true
					}
				})
			}
		}
	])
	.factory("localStorage", ['$filter', function($filter) {
		var localStorage = window.localStorage;
		if(localStorage) {
			var db = {
				createTable: function(tableName) {
					if(tableName) {
						var raw = localStorage.getItem(tableName);
						if(!raw) {
							localStorage.setItem(tableName, "");
							return true;
						} else {
							return false;
						}
					}
				},
				removeTable: function(tableName) {
					if(tableName) {
						localStorage.removeItem(tableName);
						return true;
					} else {
						return false;
					}
				},
				saveTable: function(tableName, content) {
					if(tableName && content) {
						localStorage.setItem(tableName, $filter('json')(content));
						return true;
					} else {
						return false;
					}
				},
				getTable: function(tableName) {
					if(tableName) {
						return localStorage.getItem(tableName);
					} else {
						return null;
					}
				},
				clearTable: function(tableName) {
					if(tableName) {
						localStorage.setItem(tableName, "");
						return true;
					} else {
						return false;
					}
				}
			}
			return db;
		} else {
			return null;
		}
	}])
	//虚拟键盘
	.directive('autoFocus', function($timeout) {
	    return {
	        restrict: 'AC',
	        link: function(_scope, _element) {
	            $timeout(function(){
	                _element[0].focus();
	            }, 0);
	        }
	    };
	})
	//虚拟键盘end
	
	.config(function($mdDateLocaleProvider) {
		$mdDateLocaleProvider.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
		$mdDateLocaleProvider.shortMonths = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
		$mdDateLocaleProvider.days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
		$mdDateLocaleProvider.shortDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	})
	.controller('indexCtrl', function($scope, $rootScope, All_Time, localStorage) {
		$rootScope.S4 = function() {
			return(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		$rootScope.NewGuid = function() {
			return($rootScope.S4() + $rootScope.S4() + "-" + $rootScope.S4() + "-" + $rootScope.S4() + "-" + $rootScope.S4() + "-" + $rootScope.S4() + $rootScope.S4() + $rootScope.S4());
		}
		$rootScope.NewflawID = function() {
			return($rootScope.S4() + $rootScope.S4() + "-" + S$rootScope.S4());
		}

		$rootScope.getDate = function() {
			var today = new Date();
			var y = today.getFullYear();
			var month = today.getMonth() + 1;
			var d = today.getDate();
			var h = today.getHours();
			if(month < 10) {
				month = "0" + month;
			}
			if(d < 10) {
				d = "0" + d;
			}

			return y + "-" + month + "-" + d;
		}

		$rootScope.getHours = function() {
			var today = new Date();
			var y = today.getFullYear();
			var month = today.getMonth() + 1;
			var d = today.getDate();
			var h = today.getHours();

			return h;
		}

		$rootScope.data = {
			userName: "",
			userKey: 0,
			edit: false,
			flawTable: {
				GUID: $rootScope.NewGuid(),
				date: $rootScope.getDate(),
				specificTime: All_Time[$rootScope.getHours()],
				groupID: "", //productionLine.Name
				userID: "", //productionLine.userID
				userName: "", //productionLine.userName
				orderForm: "", //order ID
				comb: "", //comb
				CustomerStyleCode: "", //CustomerStyleCode
				size: "", //size
				categoryCode: "", //款式Code
				category: "", //款式
				counts: 0, //总瑕疵数
				output: "", //
				heke: null, //
				unit: "CM",
				isSys: 'Y',
				barcode:'',
				gmt: {}

			},
			isSubmit: 0, //数据是否已经被提交
			flawDetails: [],
			add: [],
			del: []
		};

		$rootScope.weiyanData = {
			GUID: $rootScope.NewGuid(), //GUID
			date: $rootScope.getDate(), //验货日期
			UserName: '', //Auditor
			userID: '',
			fepo: null, //FEPO
			banzu: '', //班组
			po: '', //PO
			pos: {}, //PO的集合，不上传
			Style: '', //STYLE
			PoQty: '', //PO QTY
			yanshouNo: '', //验收数量
			AQL: "", //AQL
			chouYanNo: '', //抽验数量
			yunShouNo: '', //允收数量
			submitTime: '', //交期
			submitDates: [], //交期和PO的组合，不上传 
			auditType: '1st', //Audit Type
			output: null, //累计数量，不上传
			codeDtail: [], //瑕疵明细表
			CODETAIL: { //单次瑕疵明细， 不上传
				dataGUID: '', //主表GUID
				date: '',
				userID: '',
				groupID: '',
				GUID: $rootScope.NewGuid(), //GUID
				defectType: '', //瑕疵类型
				typeGUID: '', //瑕疵类型GUID
				codeGUID: '', //瑕疵名GUID
				defectName: '', //瑕疵名
				defectCode: '', //瑕疵代码
				QTY: 0, //瑕疵数量
				imgSrc: 'img/white.jpg' //瑕疵图片路径
			},
			category: "", //尺寸表名称 ，不上传
			combs: {}, //COMB的集合，不上传
			sizes: {}, //COMB和SIZE的组合，不上传
			result: 'FAIL', //result               
			sizeImg: 'img/white.jpg', //SIZE瑕疵图片
			unit: "CM", //尺寸的单位
			gmt: {} //SIZE的瑕疵组合
		}

		$rootScope.lastData = {
			GUID: $rootScope.NewGuid(), //GUID
			date: $rootScope.getDate(), //验货日期
			userName: '', //Auditor
			userID: '',
			fepo: null, //FEPO
			banzu: '', //班组
			po: '', //PO
			poQty: '', //PO QTY
			submitTime: '', //交期
			submitDates: {}, //交期和PO的组合，不上传
			pos: {}, //PO的集合
			style: '', //Style
			packageNo: '', //抽验箱号
			tiezhi: 'FAIL', //UCC128贴纸
			MD: 'FAIL', //MD
			fuliao: 'FAIL', //包装方法/辅料
			inerNumber: 'FAIL', //箱内件数
			daima: 'FAIL', //目的港/代码
			COC: 'FAIL', //GB/COC
			result: 'FAIL', //Result
			auditType: '1st', //Audit Type
			output: null, //累计数量
			defectDetail: { //单次瑕疵明细
				dataGUID: '', //主表GUID
				date: '',
				userID: '',
				groupID: '',
				GUID: $rootScope.NewGuid(), //GUID
				defectType: '', //瑕疵类别
				typeGUID: '', //类别GUID
				codeGUID: '', //瑕疵名GUID
				defectName: '', //瑕疵名
				defectCode: '', //瑕疵代码
				QTY: 0, //瑕疵数量
				imgSrc: 'img/white.jpg' //瑕疵图片路径

			},
			DefectDetails: [], //瑕疵明细表
			vasImg: [] //VAS图片路径表 

		}

		$rootScope.clearWeiyan = function() {

			$rootScope.weiyanData.GUID = $rootScope.NewGuid();
			$rootScope.weiyanData.date = $rootScope.getDate();
			$rootScope.weiyanData.fepo = null;
			$rootScope.weiyanData.banzu = '';
			$rootScope.weiyanData.po = '';
			$rootScope.weiyanData.output = null;
			$rootScope.weiyanData.pos = {};
			$rootScope.weiyanData.Style = '';
			$rootScope.weiyanData.PoQty = '';
			$rootScope.weiyanData.yanshouNo = '';
			$rootScope.weiyanData.AQL = "";
			$rootScope.weiyanData.chouYanNo = '';
			$rootScope.weiyanData.yunShouNo = '';
			$rootScope.weiyanData.submitTime = '';
			$rootScope.weiyanData.submitDates = {};
			$rootScope.weiyanData.auditType = '1st';
			$rootScope.weiyanData.codeDtail = [];
			$rootScope.weiyanData.gmt = {};
			$rootScope.weiyanData.combs = {};
			$rootScope.weiyanData.sizes = {};
			$rootScope.weiyanData.CODETAIL = {
				dataGUID: '',
				date: '',
				userID: '',
				groupID: '',
				GUID: $rootScope.NewGuid(),
				defectType: '',
				typeGUID: '',
				codeGUID: '',
				defectName: '',
				defectCode: '',
				QTY: 0,
				imgSrc: 'img/white.jpg'
			};
			$rootScope.weiyanData.result = '';
			$rootScope.weiyanData.sizeDetail = [];
			$rootScope.weiyanData.sizeImg = '';
			$rootScope.weiyanData.unit = "CM";
			$rootScope.weiyanData.category = '';
			$rootScope.categorySize = [{
				buwei: "前浪",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "后浪",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "腰围",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "臀围",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "腿围",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "脚口",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "内长",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}, {
				buwei: "外长",
				list: {
					GMT1: '',
					GMT2: '',
					GMT3: '',
					GMT4: '',
					GMT5: '',
					GMT6: ''
				}
			}];
		}

		$rootScope.clearLast = function() {
			$rootScope.lastData.GUID = $rootScope.NewGuid();
			$rootScope.lastData.date = $rootScope.getDate();
			$rootScope.lastData.fepo = null;
			$rootScope.lastData.banzu = '';
			$rootScope.lastData.po = '';
			$rootScope.lastData.output = null;
			$rootScope.lastData.poQty = null;
			$rootScope.lastData.submitTime = '';
			$rootScope.lastData.submitDates = {};
			$rootScope.lastData.pos = {};
			$rootScope.lastData.style = '';
			$rootScope.lastData.packageNo = '';
			$rootScope.lastData.tiezhi = 'FAIL';
			$rootScope.lastData.MD = 'FAIL';
			$rootScope.lastData.fuliao = 'FAIL';
			$rootScope.lastData.inerNumber = 'FAIL';
			$rootScope.lastData.daima = 'FAIL';
			$rootScope.lastData.COC = 'FAIL';
			$rootScope.lastData.result = 'FAIL';
			$rootScope.lastData.auditType = '1st';
			$rootScope.lastData.defectDetail = {
				dataGUID: '',
				date: '',
				userID: '',
				groupID: '',
				GUID: $rootScope.NewGuid(),
				defectType: '',
				typeGUID: '',
				codeGUID: '',
				defectName: '',
				defectCode: '',
				QTY: 0,
				imgSrc: 'img/white.jpg'

			};
			$rootScope.lastData.DefectDetails = [];
			$rootScope.lastData.vasImg = [];
			window.localStorage.removeItem('packageNo')
		}

		$rootScope.clearData = function() {
			$rootScope.data.flawTable = {
				GUID: $rootScope.NewGuid(),
				date: $rootScope.getDate(),
				specificTime: All_Time[$rootScope.getHours()],
				groupID: "", //productionLine.Name
				groupGUID: "", //productionLine.ID
				userID: "", //productionLine.userID
				userName: "", //productionLine.userName
				orderForm: "", //order ID
				comb: "", //comb
				CustomerStyleCode: "", //CustomerStyleCode
				size: "", //size
				category: "", //款式
				counts: 0, //总瑕疵数
				output: "", //
				heke: null, //
				unit: "CM",
				isSys:'Y',
				barcode:'',
				gmt: {}
			};

			$rootScope.data.flawDetails = [];
			$rootScope.data.add = [];
			$rootScope.data.del = [];
			$rootScope.data.isSubmit = 0;
			window.localStorage.removeItem('ruid');
		}

		$rootScope.clearData1 = function() {
			$rootScope.data.flawTable.GUID = $rootScope.NewGuid();
			$rootScope.data.flawTable.date = $rootScope.getDate();
			$rootScope.data.flawTable.specificTime = All_Time[$rootScope.getHours()];
			$rootScope.data.flawTable.orderForm = '';
			$rootScope.data.flawTable.comb = '';
			$rootScope.data.flawTable.CustomerStyleCode = '';
			$rootScope.data.flawTable.size = '';
			$rootScope.data.flawTable.heke = null;
			$rootScope.data.flawTable.counts = 0;
			$rootScope.data.flawTable.output = "";
			$rootScope.data.flawTable.unit = "CM";
			$rootScope.data.flawTable.isSys = 'Y';
			$rootScope.data.flawTable.barcode='';
			$rootScope.data.flawTable.gmt = {};
			$rootScope.data.flawDetails = [];
			$rootScope.data.add = [];
			$rootScope.data.del = [];
			$rootScope.data.isSubmit = 0;
			window.localStorage.removeItem('ruid');
		}

		$rootScope.newData = function() {
			$rootScope.data.flawTable.GUID = $rootScope.NewGuid();
			$rootScope.data.flawTable.date = $rootScope.getDate();
			$rootScope.data.flawTable.specificTime = All_Time[$rootScope.getHours()];
			$rootScope.data.flawTable.counts = 0;
			$rootScope.data.flawTable.output = "";
			$rootScope.data.flawTable.unit = "CM";
			$rootScope.data.flawTable.gmt = {};
			$rootScope.data.flawDetails = [];
			$rootScope.data.add = [];
			$rootScope.data.del = [];
		}

		$rootScope.goto = function(url) {
			$scope.url = url;
		}

		//		$scope.aa = 'aa';
		//		
		//		$rootScope.gotodef = function(url) {
		//			$scope.aa = 'bb'
		////			$scope.$apply();
		//			$scope.url = url;
		//			$scope.$apply();
		//		}

		$rootScope.back = function() {

		}

		document.addEventListener("plusready", onPlusReady, false);

		function onPlusReady() {
			$rootScope.sd = getSDRoot();
			//      alert($rootScope.sd)
		}

		function getSDRoot() {
			// 导入android.os.Environment类对象
			var environment = plus.android.importClass("android.os.Environment");
			// 判断SD卡是否插入
			if(environment.getExternalStorageState() !== environment.MEDIA_MOUNTED) {
				plus.nativeUI.toast('没有找到SD卡');
				return;
			}
			return environment.getExternalStorageDirectory();
		}

		//转码
		$rootScope.base64EncodeChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/";

		$rootScope.base64encode = function(str) {
			var out, i, len;
			var c1, c2, c3;
			len = str.length;
			i = 0;
			out = "";
			while(i < len) {
				c1 = str.charCodeAt(i++) & 0xff;
				if(i == len) {
					out += $rootScope.base64EncodeChars.charAt(c1 >> 2);
					out += $rootScope.base64EncodeChars.charAt((c1 & 0x3) << 4);
					out += "==";
					break;
				}
				c2 = str.charCodeAt(i++);
				if(i == len) {
					out += $rootScope.base64EncodeChars.charAt(c1 >> 2);
					out += $rootScope.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
					out += $rootScope.base64EncodeChars.charAt((c2 & 0xF) << 2);
					out += "=";
					break;
				}
				c3 = str.charCodeAt(i++);
				out += $rootScope.base64EncodeChars.charAt(c1 >> 2);
				out += $rootScope.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
				out += $rootScope.base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
				out += $rootScope.base64EncodeChars.charAt(c3 & 0x3F);
			}
			return out;
		}
		$scope.url = "login.html";
	})
	.controller('loginCtrl', function($scope, $rootScope, api, $mdToast, localStorage) {
		$scope.userName = "b52186";
		$scope.password = "123456789";

		$scope.activated = false;

//		$scope.tests = function() {
//			console.log('enter tests')
//			api.test.get(null, {
//				FEPOCode: '6KC34X13X01'
//			}, function(data) {
//				console.log('enter result')
//				console.dir(data);
//				var da = {};
//				for(var i = 0; i < data.length; i++) {
//					da[data[i].CustomerPo] = data[i];
//				}
//
//				for(var d in da) {
//					if(d) {
//						console.dir(d)
//					}
//				}
//			}, function(error) {
//				console.log(error);
//			});
//		}
//
//		$scope.tests3 = function() {
//			console.log('enter tests3')
//			api.test.get(null, {
//				FEPOCode: '7KC34O32C03'
//			}, function(data) {
//				console.log('enter result3')
//				console.dir(data);
//			}, function(error) {
//				console.log(error);
//			});
//		}
//
//		$scope.te = [0, 1, 2, 1, 2, 3, 4, 5]
//		$scope.tests2 = function() {
//			$scope.dict = {};
//			for(var i = 0; i < $scope.te.length; i++) {
//				$scope.dict[$scope.te[i]] = $scope.te[i];
//			}
//
//			for(var d in $scope.dict) {
//				if(d) {
//					console.log(d)
//				}
//			}
//
//		}

		$scope.login = function() {
			$scope.activated = true;
			api.login.post(null, {
				name: $scope.userName,
				password: $rootScope.base64encode($scope.password)
			}, function(data) {
				$scope.activated = false;
				if(data.status == 2) {
					$mdToast.show($mdToast.simple().content('用户名或密码错误，请重新输入'));
				} else {
					if(localStorage.getTable("data")) {
						var oldData = $.parseJSON($.parseJSON(localStorage.getTable("data")));
						var oldLastData = $.parseJSON($.parseJSON(localStorage.getTable("lastData")));
						var oldWeiyanData = $.parseJSON($.parseJSON(localStorage.getTable("weiyanData")));
						if(oldData.userName == $scope.userName) {
							$rootScope.data = oldData;
							$rootScope.lastData = oldLastData;
							$rootScope.weiyanData = oldWeiyanData;
						} else {
							localStorage.removeTable("data");
							localStorage.removeTable("lastData");
							localStorage.removeTable("weiyanData");
						}
					}
					setInterval(function() {
						localStorage.saveTable("data", JSON.stringify($rootScope.data));
						localStorage.saveTable("lastData", JSON.stringify($rootScope.lastData));
						localStorage.saveTable("weiyanData", JSON.stringify($rootScope.weiyanData));
					}, 1000);

					$rootScope.lastData.userName = data.userinfo.UserName;
					$rootScope.weiyanData.UserName = data.userinfo.UserName;
					$rootScope.data.userName = $scope.userName;
					$rootScope.weiyanData.userID = $scope.userName;
					$rootScope.weiyanData.CODETAIL.userID = $scope.userName;
					$rootScope.lastData.userID = $scope.userName;
					$rootScope.lastData.defectDetail.userID = $scope.userName;
					$rootScope.data.userKey = data.key;
					//					alert($rootScope.data.userKey);
					$rootScope.goto("choice.html");
				}
			}, function(error) {
				$scope.activated = false;
				$mdToast.show($mdToast.simple().content('登录失败!'));
			});
		}

		$rootScope.logout = function() {
			$rootScope.data.userName = "";
			$rootScope.data.userKey = 0;
			$rootScope.clearData();
			$rootScope.clearWeiyan();
			$rootScope.clearLast();
		}
	})
	.controller('choiceCtrl', function($scope, $rootScope) {
		//		console.log($rootScope.data.edit)
		$scope.logout = function() {
			$rootScope.logout();
			$rootScope.goto("login.html");
		}

		$scope.luru = function() {
			$rootScope.data.edit = false;
			$rootScope.goto("defective.html");
		}
	})
	.controller('orderCtrl', function($scope, api, $rootScope, MODELS, HEKE, All_Time) {
		$rootScope.data.flawTable.specificTime = All_Time[$rootScope.getHours()];
		$scope.activated = true;
		$scope.productionLineList = [];
		$scope.models = [];
		$scope.hekes = HEKE;
		$scope.selectHeKe = $rootScope.data.flawTable.heke ? $rootScope.data.flawTable.heke.split("|") : [];
		$scope.selectProductionLine = function() {
			for(var i = 0; i < $scope.productionLineList.length; i++) {
				if($scope.productionLineList[i].ID == $rootScope.data.flawTable.groupGUID) {
					$rootScope.data.flawTable.groupID = $scope.productionLineList[i].Name;
					$rootScope.data.flawTable.userName = $scope.productionLineList[i].UserName;
					$rootScope.data.flawTable.userID = $scope.productionLineList[i].UserID;
					break;
				}
			}
		}

		$scope.selectCategory = function() {
			for(var i = 0; i < $scope.models.length; i++) {
				if($scope.models[i].StyleCode == $rootScope.data.flawTable.categoryCode) {
					$rootScope.data.flawTable.category = $scope.models[i].StyleName;
					break;
				}
			}
			//			console.log('aa')
			//			build(0);
			//			build(1);
		}

		$scope.toggle = function(item) {
			var idx = $scope.selectHeKe.indexOf(item);
			if(idx > -1) $scope.selectHeKe.splice(idx, 1);
			else $scope.selectHeKe.push(item);
			$rootScope.data.flawTable.heke = $scope.selectHeKe.join("|");
		};

		$scope.exists = function(item) {
			return $scope.selectHeKe.indexOf(item) > -1;
		};

		$scope.next = function() {
			$rootScope.goto('defective.html');
		}

		function init() {
			api.productionLine.get(null, {
				user: $rootScope.data.userName
			}, function(data) {

				$scope.productionLineList = data;
			}, function(error) {
				console.log(error);
			});

			api.styleType.get(null, {},
				function(data) {
					$scope.activated = false;
					$scope.models = data;

					for(var i = 0; i < $scope.models.length; i++) {
						if($scope.models[i].StyleName == $rootScope.data.flawTable.category) {
							$rootScope.data.flawTable.categoryCode = $scope.models[i].StyleCode;
							break;
						}
					}
				},
				function(error) {
					console.log(error);
				});
		}
		init();
	})
	.controller('defectiveCtrl', function($scope, api, $rootScope, All_Time, MODELS, TEMPLATES, SIT, NODE, $interval, $mdDialog, $mdToast, HEKE) {

		$scope.activated = true;
		$scope.once = 0;
		$scope.stage = {
			width: 400,
			height: 500
		};
		$scope.stageList = [];

		$scope.allTimes = All_Time;
		$scope.defectTypeList = [];
		$scope.defectCodeList = [];
		$scope.productionLineContractList = [];
		$scope.defectCode = null;
		$scope.model = null;
		$scope.timeNow = null;

		//判断是否清空数据
		if($rootScope.data.edit == true) {
			$rootScope.data.isSubmit = 1;
			document.getElementById('order').style.display = 'none';
			document.getElementById('card').style.display = 'none';
			document.getElementById('ing').style.display = 'none';
		} else {
			//			console.log($rootScope.data.isSubmit)
			if($rootScope.data.isSubmit == 1) {
				$rootScope.clearData();

			}
		}

		$interval(function() {
			$scope.timeNow = (new Date()).format("yyyy-MM-dd hh:mm:ss");
		}, 1000)

		$scope.FLAWDETAIL = {
			GUID: $rootScope.data.flawTable.GUID,
			flawID: "", //$rootScope.NewGuid(),
			date: new Date(), //$rootScope.getDate(),
			specificTime: "" + $rootScope.getHours() + "-" + ($rootScope.getHours() + 1), //All_Time[$rootScope.getHours()],
			groupID: $rootScope.data.flawTable.groupGUID, //产线 是否是主信息的?
			userID: $rootScope.data.flawTable.userID, //产线里的userID 是否是主信息的?
			orderForm: $rootScope.data.flawTable.orderForm, //订单 是否是主信息的?
			pos: "", //front or bark
			x: "", //点的坐标x
			y: "", //点的坐标y
			fill: "", //DefectType.color
			position: "", //点击点对应的templates.position
			block: "", //templates.block
			flawCategory: "", //DefectType.name
			flawNumber: "", //defectCode.DefectCode
			flawGUID: "", //defectCode.GUID
			flawName: "" //defectCode.DefectName
				//defectCode:null,
				//defectType:null//不提交
		}

		//var flawDteail = $.extend(true, {}, FLAWDETAIL);
		//      console.log($scope.FLAWDETAIL.GUID);
		//      console.log($rootScope.data.flawTable.GUID)
		$scope.changeDefectType = function(defectType, x) {
			$scope.FLAWDETAIL.flawCategory = defectType.name;
			$scope.FLAWDETAIL.fill = defectType.DefectTypeColor;
			$scope.FLAWDETAIL.flawNumber = "";
			$scope.FLAWDETAIL.flawGUID = "";
			$scope.FLAWDETAIL.flawName = "";

			//选中瑕疵类别高亮显示------JK
			for(var i = 0; i < $scope.defectTypeList.length; i++) {
				if(i == x) {
					defectType.show = x;
				} else {
					$scope.defectTypeList[i].show = 100;
				}
			}
			//----JK-end----

			api.defectCode.get(null, {
				GUID: defectType.GUID
			}, function(data) {
				$scope.defectCodeList = data;
			}, function(error) {
				console.log(error);
			});
		}

		//================================================================

		$scope.hekes = HEKE;
		$scope.ruid = null;
		$scope.selectHeKe = $rootScope.data.flawTable.heke ? $rootScope.data.flawTable.heke.split("|") : [];
		$scope.styleCode = '';
		$scope.cardid = '';
		//初始化RFID
		if(window.localStorage.getItem('ruid')) {
			$scope.ruid = Number(window.localStorage.getItem('ruid'));
		} else {
			$scope.ruid = null;
		}

		if($rootScope.data.flawTable.CustomerStyleCode) {
			$scope.styleCode = $rootScope.data.flawTable.CustomerStyleCode;
		}
		//失去焦点
		$scope.aa = function() {
				$scope.cardid = window.localStorage.getItem('ruid');
				if($rootScope.data.flawTable.counts != 0) {
					if($scope.cardid != $scope.ruid) {
						//				 console.log('jjj' +$rootScope.data.flawTable.GUID)
						
						api.postFlawTable.post(null, $rootScope.data.flawTable, function(data) {
							if(data.status == 1) {

								//				     console.dir($rootScope.data.flawDetails);
								//               console.dir($rootScope.data.flawTable.GUID)
								api.postFlawDetail.post(null, {
									details: $rootScope.data.flawDetails
								}, function(data) {
									$scope.activated = false;
									if(data.status == 1) {
										ttt('提交成功!');

										$scope.styleCode = $rootScope.data.flawTable.CustomerStyleCode;
										$scope.guid = $rootScope.data.flawTable.GUID;
										window.localStorage.setItem('guid', $scope.guid);
										$rootScope.clearData1();
										$scope.FLAWDETAIL.GUID = $rootScope.data.flawTable.GUID;
										$scope.card();
									}

								}, function(error) {
									$scope.activated = false;
									ttt('提交失败!')

								});
							}
						}, function(error) {
							$scope.activated = false;
							ttt('提交失败!');
							//				$mdToast.show($mdToast.simple().content('提交失败!'));
						});
					} else {
						ttt('CardId相同，请勿重复刷卡！');
					}
				} else {
					if($scope.ruid) {
						if($scope.cardid != $scope.ruid) {
							$scope.card();
						} else {
							ttt('CardId相同，请勿重复刷卡！');
						}

					} else {
						ttt('未读取到CardID');
					}
				}

			}
			//点击输入框，全选中
		$scope.selectAll = function() {
				document.getElementById('cardId').focus();
				document.getElementById('cardId').select();
			}
			//判断是否有产线

		$scope.queryProduct = function() {
				if($rootScope.data.flawTable.groupID) {
					$rootScope.goto('query1.html');

				} else {
					ttt('请选择产线');
				}
			}
			//调用数据接口
		$scope.card = function() {
			window.localStorage.setItem('ruid', $scope.ruid);

			api.getRFIDInfo.get(null, {
				rfid: $scope.ruid.toString()
			}, function(data) {
                $rootScope.data.flawTable.barcode=data[0].sBarCode;
				$rootScope.data.flawTable.orderForm = data[0].sSubFEPOCode;
				$rootScope.data.flawTable.comb = data[0].sCombName;
				$rootScope.data.flawTable.CustomerStyleCode = data[0].sCustomerStyleCode;
				$rootScope.data.flawTable.output = data[0].iPackageQty;
				$rootScope.data.flawTable.size = data[0].sModifySize;
				$scope.FLAWDETAIL.orderForm = $rootScope.data.flawTable.orderForm;
				if($scope.styleCode) {
					if($scope.styleCode != $rootScope.data.flawTable.CustomerStyleCode) {
						$rootScope.data.flawTable.groupID = '';
						$rootScope.data.flawTable.groupGUID = '';
						$rootScope.data.flawTable.category = '';
						$rootScope.data.flawTable.categoryCode = '';

					} else {
						for(var i = 0; i < MODELS.length; i++) {
							if(MODELS[i].productName == $rootScope.data.flawTable.category) {
								$scope.model = MODELS[i];
								break;
							}
						}
						//						angular.element(document).ready(function() {
						build(0);
						build(1);

						//						});
					}
				}
				console.dir($rootScope.data);
			}, function(error) {
				console.log(error);
			});

		}

		$scope.toggle = function(item) {
			var idx = $scope.selectHeKe.indexOf(item);
			if(idx > -1) $scope.selectHeKe.splice(idx, 1);
			else $scope.selectHeKe.push(item);
			$rootScope.data.flawTable.heke = $scope.selectHeKe.join("|");
		};
		$scope.exists = function(item) {
			return $scope.selectHeKe.indexOf(item) > -1;
		};
		//选择产线
		$scope.selectProductionLine = function() {
				for(var i = 0; i < $scope.productionLineList.length; i++) {
					if($scope.productionLineList[i].ID == $rootScope.data.flawTable.groupGUID) {
						$rootScope.data.flawTable.groupID = $scope.productionLineList[i].Name;
						$rootScope.data.flawTable.userName = $scope.productionLineList[i].UserName;
						$rootScope.data.flawTable.userID = $scope.productionLineList[i].UserID;
						$scope.FLAWDETAIL.groupID = $rootScope.data.flawTable.groupGUID;
						$scope.FLAWDETAIL.userID = $rootScope.data.flawTable.userID;
						break;
					}
				}
			}
			//关闭刷卡界面
		$scope.hideOrder = function() {

				$scope.a1 = true;
				if((!$rootScope.data.flawTable.groupID || !$rootScope.data.flawTable.categoryCode) && $scope.ruid) {
					//				$mdToast.show($mdToast.simple().content('请将订单填写完整!'))
					ttt('请将订单填写完整!');
				} else {
					document.getElementById('order').style.display = 'none';
					document.getElementById('ing').style.display = 'none';
				}

			}
			//显示刷卡界面
		$scope.showOrder = function() {
				document.getElementById('order').style.display = 'block';
				document.getElementById('cardId').focus();
				document.getElementById('cardId').select();
				document.getElementById('ing').style.display = 'block';

			}
			//选择款式
		$scope.selectCategory = function() {
			for(var i = 0; i < $scope.models.length; i++) {
				if($scope.models[i].StyleCode == $rootScope.data.flawTable.categoryCode) {
					$rootScope.data.flawTable.category = $scope.models[i].StyleName;
					break;
				}
			}

			for(var i = 0; i < MODELS.length; i++) {
				if(MODELS[i].productName == $rootScope.data.flawTable.category) {
					$scope.model = MODELS[i];
					break;
				}
			}
			//			angular.element(document).ready(function() {
			build(0);
			build(1);

			//			});

		}

		//===================================================================

		for(var i = 0; i < MODELS.length; i++) {
			if(MODELS[i].productName == $rootScope.data.flawTable.category) {
				$scope.model = MODELS[i];
				break;
			}
		}

		$scope.selectDefectCode = function() {
			for(var i = 0; i < $scope.defectCodeList.length; i++) {
				if($scope.defectCodeList[i].GUID == $scope.FLAWDETAIL.flawGUID) {
					$scope.FLAWDETAIL.flawNumber = $scope.defectCodeList[i].DefectCode;
					$scope.FLAWDETAIL.flawName = $scope.defectCodeList[i].DefectName;
					break;
				}
			}
		}

		$scope.back = function(ev) {
			if($scope.once == 0) {
				$scope.once = 1;
				var tip = confirm('确认返回登录界面？')
				if(tip) {
					$rootScope.logout();

					$rootScope.goto("login.html");
				} else {
					$scope.once = 0;
				}
			}
		}

		$scope.clear = function(ev) {
			var confirm = $mdDialog.confirm({
				"title": '是否清空所有数据',
				"textContent": '将清空所有数据，是否继续？',
				"targetEvent": ev,
				"ok": '确认',
				"cancel": '取消'
			});
			$mdDialog.show(confirm).then(function() {
				$rootScope.data.flawTable.counts = 0;
				$rootScope.data.flawDetails = [];
				$rootScope.data.flawTable.date = $rootScope.getDate();
				$rootScope.data.flawTable.specificTime = All_Time[$rootScope.getHours()];
				$rootScope.data.add = [];
				$rootScope.data.del = [];
				document.getElementById('order').style.display = 'block';
				document.getElementById('cardId').focus();
				document.getElementById('cardId').select();

				for(var i = 0; i < MODELS.length; i++) {
					if(MODELS[i].productName == $rootScope.data.flawTable.category) {
						$scope.model = MODELS[i];
						break;
					}
				}

				//			angular.element(document).ready(function() {
				build(0);
				build(1);

				//			});

				//				$rootScope.newData();
				//				$rootScope.goto('order.html');
				//$scope.status = 'You decided to get rid of your debt.';
			}, function() {
				//$scope.status = 'You decided to keep your debt.';
			});
		};

		function init() {

			api.defectType.get(null, {}, function(data) {
				//----jk----
				for(var i = 0; i < data.length; i++) {
					data[i].show = 100;
				}

				//----jk-end----
				$scope.defectTypeList = data;
				//				alert(JSON.stringify($scope.defectTypeList))
				//				console.dir(data);
			}, function(error) {
				console.log(error);
			});

			api.productionLineContractList.get(null, {
				groupID: $rootScope.data.flawTable.groupID
			}, function(data) {
				$scope.productionLineContractList = data;
				$scope.activated = false;
			}, function(error) {
				console.log(error);
			});

			api.productionLine.get(null, {
				user: $rootScope.data.userName
			}, function(data) {

				//				console.dir(data);
				$scope.productionLineList = data;
			}, function(error) {
				console.log(error);
			});

			api.styleType.get(null, {},
				function(data) {
					$scope.activated = false;
					$scope.models = data;

					for(var i = 0; i < $scope.models.length; i++) {
						if($scope.models[i].StyleName == $rootScope.data.flawTable.category) {
							$rootScope.data.flawTable.categoryCode = $scope.models[i].StyleCode;
							break;
						}
					}
				},
				function(error) {
					console.log(error);
				});

		}
		init();

		function build(index) {
			var stage = $scope.stageList[index] = new Kinetic.Stage({
				id: TEMPLATES[$scope.model.id][index].pos,
				container: TEMPLATES[$scope.model.id][index].pos,
				width: $scope.stage.width,
				height: $scope.stage.height
			});
			var layer = new Kinetic.Layer();
			var layer_rect = new Kinetic.Layer();
			var layer_circle = new Kinetic.Layer();
			stage.add(layer);
			stage.add(layer_rect);
			stage.add(layer_circle);
			var imageObj = new Image();
			imageObj.onload = function() {
				var image = new Kinetic.Image({
					x: SIT[$scope.model.id].a,
					y: SIT[$scope.model.id].b,
					image: imageObj,
					width: SIT[$scope.model.id].c,
					height: SIT[$scope.model.id].d
				})
				layer.add(image);
				layer.draw();
			}
			imageObj.src = TEMPLATES[$scope.model.id][index].img;

			function drawRect(flawDetail) {
				var tempRect = new Kinetic.Circle({
					radius: 12,
					fill: flawDetail.fill,
					stroke: 'black',
					strokeWidth: 0.2,
					x: flawDetail.x,
					y: flawDetail.y,
					id: flawDetail.flawID
				});
				tempRect.on('touchmove click', function(evt) {
					$rootScope.data.flawTable.counts--;
					$scope.$apply();
					//					console.log("del " + $rootScope.data.flawDetails.length);
					for(var i = 0; i < $rootScope.data.flawDetails.length; i++) {
						//						console.log("del  " + $rootScope.data.flawDetails[i].flawID + "|" + evt.target.attrs.id);
						if($rootScope.data.flawDetails[i].flawID === evt.target.attrs.id) {
							if($rootScope.data.edit) {
								$rootScope.data.del.push($rootScope.data.flawDetails[i]);
							}
							$rootScope.data.flawDetails.splice(i, 1);
						}
					}
					tempRect.destroy();
					layer_circle.draw();
				});
				layer_circle.add(tempRect);
				tempRect.draw();
				layer_circle.draw();
			}

			var num = 0;
			for(var i = 0; i < 6; i++) {
				for(var j = 0; j < 10; j++) {
					var rect = new Kinetic.Rect({
						width: 60,
						height: 50,
						x: 60 * i,
						y: 50 * j,
						fill: 'white',
						opacity: 0.2,
						stroke: 'black',
						strokeWidth: 1
					});
					rect.id(NODE[num++]);

					rect.on('tap click', function(evt) {
						if($scope.defectForm.$invalid) {
							return;
						}
						var pos = stage.getPointerPosition();
						var t = null;
						if(evt.target.getParent().getParent().attrs.id === 'front') {
							t = TEMPLATES[$scope.model.id][0];
						} else {
							t = TEMPLATES[$scope.model.id][1];
						}
						for(var i = 0; i < t.block.length; i++) {
							if(t.block[i].indexOf(evt.target.attrs.id) !== -1) {
								$scope.FLAWDETAIL.position = t.position[i];

								$rootScope.data.flawTable.counts++;
								$scope.$apply();
								var flawDetail = $.extend(true, {}, $scope.FLAWDETAIL);
								flawDetail.flawID = $rootScope.NewGuid();
								flawDetail.x = pos.x;
								flawDetail.y = pos.y;
								flawDetail.pos = evt.target.getParent().getParent().attrs.id;
								flawDetail.block = evt.target.attrs.id;
								flawDetail.date = (flawDetail.date).format("yyyy-MM-dd");
								drawRect(flawDetail);
								console.log("add");
								if($rootScope.data.edit) {
									$rootScope.data.add.push(flawDetail);
								}
								$rootScope.data.flawDetails.push(flawDetail);

								var flawNameGroup = Enumerable.From($rootScope.data.flawDetails)
									.GroupBy(function(x) {
										return x.flawName
									})
									.ToArray();
								for(var m = 0; m < flawNameGroup.length; m++) {
									for(var n = 0; n < $scope.productionLineContractList.length; n++) {
										if(flawNameGroup[m].source.length > $scope.productionLineContractList[n].SendQuantity) {
											var content = $rootScope.data.flawTable.groupID + " " +
												$rootScope.data.flawTable.orderForm + "," +
												(new Date()).format("yyyy-M-d h:m:s") + " 因" + flawNameGroup[m].source[0].flawName +
												"*" + "产生" + flawNameGroup[m].source.length +
												"个瑕疵,请在5分钟内前往处理！";

											api.sendMessage.post(null, {
												pk: $rootScope.NewGuid(),
												date: flawDetail.date,
												specificTime: flawDetail.specificTime,
												GUID: flawDetail.GUID,
												ms: {
													smscontactinfo: [{
														SmsServiceInfo: [{
															SenderMobile: $scope.productionLineContractList[n].Phone,
															SmsContactName: $scope.productionLineContractList[n].UserName
														}]
													}],
													strMessage: content,
													strSMSTitle: '',
													strErrorMessage: ''
												}
											}, function(data) {
												if(data === '1') {
													console.log("发送完成！");
												}
											}, function(error) {
												console.log(error);
											});
										}
									}
								}
							}
						}
					});

					layer_rect.add(rect);

				}

			}

			for(var i = 0; i < $rootScope.data.flawDetails.length; i++) {
				if($rootScope.data.flawDetails[i].pos == TEMPLATES[$scope.model.id][index].pos) {
					drawRect($rootScope.data.flawDetails[i]);
				}
			}

			layer_rect.draw();

		}

		angular.element(document).ready(function() {
			if($scope.model) {
				build(0);
				build(1);
			} else {
				console.log('无款式信息');
			}
		});

		//整点提交
		//检查日期格式
		function checkTime(i) {
			if(i < 10) {
				i = "0" + i
			}
			return i
		}

		$rootScope.intpoint = setInterval(function() {
			var Time = new Date();
			var h=Time.getHours();
			var m = Time.getMinutes();
			var s = Time.getSeconds();
			// add a zero in front of numbers<10
			if(h<10){
				h='0'+h;
				}
			if(h<11){
				var eh='0'+(h-1);
			}
			else{
				eh=h-1;
			}
			m = checkTime(m);
			s = checkTime(s);
			if(m == "00" && s == "00") {
				if($rootScope.data.edit == false) {
					if($rootScope.data.flawTable.comb && $rootScope.data.flawTable.groupID && $rootScope.data.flawTable.category) {
						//console.log('success');
						var StartDate=$rootScope.data.flawTable.date+" "+eh+":00:00";
						var EndDate=$rootScope.data.flawTable.date+" "+h+":00:00";
//						console.log(StartDate)
//						console.log(EndDate)
                          console.log($rootScope.data.flawTable.groupGUID)
						//				console.log($rootScope.data.flawTable.GUID);
						api.postFlawTable.post(null, $rootScope.data.flawTable, function(data) {
							if(data.status == 1) {

								api.postFlawDetail.post(null, {
									details: $rootScope.data.flawDetails
								}, function(data) {
									$scope.activated = false;
									if(data.status == 1) {
										$rootScope.goto('submit.html');
										$rootScope.data.isSubmit = 1;
										api.getOutput.get(null, {
											Style: '',
											PostID: '1AF95A6F-BD21-468D-AECA-6A234E7A225A',//$rootScope.data.flawTable.groupGUID
											DateType: 'END',
											StartDate: '2017-01-20 09:00:00',//StartDate
											EndDate: '2017-01-20 10:00:00',//EndDate
											ProcedureNo: '999'
										}, function(data) {
											console.dir(data)
											$rootScope.data.flawTable.output = data[0].output;
											
										}, function(error) {
											console.log('test output error')
											console.log(error);
										});

										$rootScope.data.flawTable.size = '';
										$rootScope.data.flawTable.counts = null;
										$rootScope.data.flawTable.GUID = $rootScope.NewGuid();
										ttt('提交成功');

									}

								}, function(error) {
									$scope.activated = false;
									//						$mdToast.show($mdToast.simple().content('提交失败!'));
									ttt('提交失败');
								});
							}
						}, function(error) {
							$scope.activated = false;
							//				$mdToast.show($mdToast.simple().content('提交失败!'));
							ttt('提交失败');
						});
					} else {
						ttt('订单信息不完整，整点提交失败')
							//								if($scope.guid) {
							//									console.log('guid')
							//									//$rootScope.data.flawTable.GUID = $scope.guid;
							////									$rootScope.goto('submit.html');
							//								}

					}
				}

			}
		}, 1000);

	})
	.controller('submitCtrl', function($scope, api, $rootScope, $mdToast) {
		$scope.activated = true;
		$scope.stylePartList = [];
		$scope.chicun = {
			GMT1: "",
			GMT2: "",
			GMT3: "",
			GMT4: "",
			GMT5: ""
		};
		if(!$rootScope.data.flawTable.unit) {
			$rootScope.data.flawTable.unit = "CM";
		}

		$scope.valsize = function(s, v, x) {
			var gmt = $rootScope.data.flawTable.gmt;

			switch(x) {
				case 1:
					if(s) {
						gmt.GMT1 = {
							chicun: s,
							list: []
						};
					} else {
						gmt.GMT1 = {
							chicun: null,
							list: []
						};
					}
					//					console.dir($scope.stylePartList);
					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt.GMT1.list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i].GMT1
						});
					}
					$rootScope.data.flawTable.gmt = gmt;
					break;
				case 2:
					if(s) {
						gmt.GMT2 = {
							chicun: s,
							list: []
						};
					} else {
						gmt.GMT2 = {
							chicun: null,
							list: []
						};
					}

					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt.GMT2.list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i].GMT2
						});
					}
					$rootScope.data.flawTable.gmt = gmt;
					break;
				case 3:
					if(s) {
						gmt.GMT3 = {
							chicun: s,
							list: []
						};
					} else {
						gmt.GMT3 = {
							chicun: null,
							list: []
						};
					}

					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt.GMT3.list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i].GMT3
						});
					}
					$rootScope.data.flawTable.gmt = gmt;
					break;
				case 4:
					if(s) {
						gmt.GMT4 = {
							chicun: s,
							list: []
						};
					} else {
						gmt.GMT4 = {
							chicun: null,
							list: []
						};
					}

					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt.GMT4.list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i].GMT4
						});
					}
					$rootScope.data.flawTable.gmt = gmt;
					break;
				case 5:
					if(s) {
						gmt.GMT5 = {
							chicun: s,
							list: []
						};
					} else {
						gmt.GMT5 = {
							chicun: null,
							list: []
						};
					}

					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt.GMT5.list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i].GMT5
						});
					}
					$rootScope.data.flawTable.gmt = gmt;
					break;
				default:
					break;
			}

		}

		$scope.save = function(g, index, code) {
			//			var id = 'numkeyboard'+code+x;
			//			
			//			if(document.getElementById(id).value){
			//				console.log(document.getElementById(id).value);
			//				$scope.stylePartList[x-1][g] = document.getElementById(id).value;
			//			}
			var gmt = {};
			for(var n in $scope.chicun) {
				if($scope.chicun[n]) {
					gmt[n] = {
						chicun: $scope.chicun[n],
						list: []
					};
					for(var i = 0; i < $scope.stylePartList.length; i++) {
						gmt[n].list.push({
							PartCode: $scope.stylePartList[i].PartCode,
							PartName: $scope.stylePartList[i].PartName,
							size: $scope.stylePartList[i][n]
						});

					}
				} else {
					if(n == g) {
						$scope.stylePartList[index][n] = '';
						//						$mdToast.show($mdToast.simple().content($rootScope.l.sizetip));
						fff('请录入尺寸');
					}

					for(var j = 0; j < $scope.stylePartList.length; j++) {
						if($scope.stylePartList[j][n]) {
							gmt[n] = {
								chicun: $scope.chicun[n],
								list: []
							};
							for(var i = 0; i < $scope.stylePartList.length; i++) {
								gmt[n].list.push({
									PartCode: $scope.stylePartList[i].PartCode,
									PartName: $scope.stylePartList[i].PartName,
									size: $scope.stylePartList[i][n]
								});
							}
							break
						}
					}

				}
			}

			$rootScope.data.flawTable.gmt = gmt;
		}

		//		$scope.save = function(g,index){
		//			var gmt = {};
		//			for(var n in $rootScope.chicun){
		//				if($rootScope.chicun[n]){
		//					gmt[n] = {chicun:$rootScope.chicun[n],flawCategory:'Measurement',list:[]};
		//					for(var i=0;i<$rootScope.stylePartList.length;i++){
		//							gmt[n].list.push({PartCode:$rootScope.stylePartList[i].PartCode,PartName:$rootScope.stylePartListEN[i],size:$rootScope.stylePartList[i][n]});
		//					}
		//				}else{
		//					for (var j=0;j<$rootScope.stylePartList.length;j++) {
		//						if($rootScope.stylePartList[j][n]){
		//							gmt[n] = {chicun:$rootScope.chicun[n],flawCategory:'Measurement',list:[]};
		//							for(var i=0;i<$rootScope.stylePartList.length;i++){
		//									gmt[n].list.push({PartCode:$rootScope.stylePartList[i].PartCode,PartName:$rootScope.stylePartListEN[i],size:$rootScope.stylePartList[i][n]});
		//							}
		//							break
		//						}
		//					}
		//					
		//					if(n == g){
		//						$rootScope.stylePartList[index][n] = '';
		////						$mdToast.show($mdToast.simple().content($rootScope.l.sizetip));
		//                      fff($rootScope.l.sizetip);
		//					}
		//				}
		//			}
		//			
		//			$rootScope.data.flawTable.gmt = gmt;
		//		}

		$scope.submit = function() {
			$scope.activated = true;
             $rootScope.data.flawTable.isSys = 'N';
			if($rootScope.data.edit == false) {
				api.postFlawTable.post(null, $rootScope.data.flawTable, function(data) {
					if(data.status == 1) {

						$mdToast.show($mdToast.simple().content('提交成功!'));
						//								$rootScope.data.isSubmit=0;
						$rootScope.clearData();
						window.localStorage.removeItem('ruid');
						window.localStorage.removeItem('guid');
						if($rootScope.data.userKey == 1 || $rootScope.data.userKey == 8 || $rootScope.data.userKey == 9) {
							$rootScope.goto('defective.html');
						} else {
							$rootScope.goto('query2.html');
						}

					}
				}, function(error) {
					$scope.activated = false;
					$mdToast.show($mdToast.simple().content('提交失败!'));
				});
			} else {

				api.changeFlawTable.post(null, $rootScope.data.flawTable, function(data) {
					if(data.status == 1) {
						for(var i = 0; i < $rootScope.data.flawDetails.length; i++) {
							$rootScope.data.flawDetails[i].GUID = $rootScope.data.flawTable.GUID;
						}
						api.changeFlawDetail.post(null, {
							add: $rootScope.data.add,
							del: $rootScope.data.del
						}, function(data) {
							$scope.activated = false;
							if(data.status == 1) {
								$mdToast.show($mdToast.simple().content('提交成功!'));
								//								$rootScope.data.isSubmit=0;
								$rootScope.clearData();
								window.localStorage.removeItem('ruid');
								window.localStorage.removeItem('guid');
								if($rootScope.data.userKey == 1 || $rootScope.data.userKey == 8 || $rootScope.data.userKey == 9) {
									$rootScope.goto('defective.html');
								} else {
									$rootScope.goto('query2.html');
								}
							}
						}, function(error) {
							$scope.activated = false;
							$mdToast.show($mdToast.simple().content('提交失败!'));
						});
					}
				}, function(error) {
					$scope.activated = false;
					$mdToast.show($mdToast.simple().content('提交失败!'));
				});

			}

		}

		function init() {
			api.stylePart.get(null, {
				styleCode: $rootScope.data.flawTable.categoryCode
			}, function(data) {
				$scope.stylePartList = data;
				for(var i = 0; i < $scope.stylePartList.length; i++) {
					$scope.stylePartList[i].GMT1 = '';
					if($rootScope.data.flawTable.gmt.GMT1) {
						$scope.chicun.GMT1 = $rootScope.data.flawTable.gmt.GMT1.chicun;
						for(var j = 0; j < $rootScope.data.flawTable.gmt.GMT1.list.length; j++) {
							if($rootScope.data.flawTable.gmt.GMT1.list[j].PartCode == $scope.stylePartList[i].PartCode) {
								$scope.stylePartList[i].GMT1 = $rootScope.data.flawTable.gmt.GMT1.list[j].size;
								break;
							}
						}
					}
					$scope.stylePartList[i].GMT2 = '';
					if($rootScope.data.flawTable.gmt.GMT2) {
						$scope.chicun.GMT2 = $rootScope.data.flawTable.gmt.GMT2.chicun;
						for(var j = 0; j < $rootScope.data.flawTable.gmt.GMT2.list.length; j++) {
							if($rootScope.data.flawTable.gmt.GMT2.list[j].PartCode == $scope.stylePartList[i].PartCode) {
								$scope.stylePartList[i].GMT2 = $rootScope.data.flawTable.gmt.GMT2.list[j].size;
								break;
							}
						}
					}
					$scope.stylePartList[i].GMT3 = '';
					if($rootScope.data.flawTable.gmt.GMT3) {
						$scope.chicun.GMT3 = $rootScope.data.flawTable.gmt.GMT3.chicun;
						for(var j = 0; j < $rootScope.data.flawTable.gmt.GMT3.list.length; j++) {
							if($rootScope.data.flawTable.gmt.GMT3.list[j].PartCode == $scope.stylePartList[i].PartCode) {
								$scope.stylePartList[i].GMT3 = $rootScope.data.flawTable.gmt.GMT3.list[j].size;
								break;
							}
						}
					}
					$scope.stylePartList[i].GMT4 = '';
					if($rootScope.data.flawTable.gmt.GMT4) {
						$scope.chicun.GMT4 = $rootScope.data.flawTable.gmt.GMT4.chicun;
						for(var j = 0; j < $rootScope.data.flawTable.gmt.GMT4.list.length; j++) {
							if($rootScope.data.flawTable.gmt.GMT4.list[j].PartCode == $scope.stylePartList[i].PartCode) {
								$scope.stylePartList[i].GMT4 = $rootScope.data.flawTable.gmt.GMT4.list[j].size;
								break;
							}
						}
					}
					$scope.stylePartList[i].GMT5 = '';
					if($rootScope.data.flawTable.gmt.GMT5) {
						$scope.chicun.GMT5 = $rootScope.data.flawTable.gmt.GMT5.chicun;
						for(var j = 0; j < $rootScope.data.flawTable.gmt.GMT5.list.length; j++) {
							if($rootScope.data.flawTable.gmt.GMT5.list[j].PartCode == $scope.stylePartList[i].PartCode) {
								$scope.stylePartList[i].GMT5 = $rootScope.data.flawTable.gmt.GMT5.list[j].size;
								break;
							}
						}
					}
				}
				$scope.activated = false;
			}, function(error) {
				console.log(error);
			});
			clearInterval($rootScope.intpoint);
		}
		init();
	})
	.controller('query1Ctrl', function($scope, api, $rootScope) {
		$scope.activated = true;
		$scope.productionLine = $rootScope.data.flawTable.groupID;
		$scope.time = $rootScope.data.flawTable.specificTime;
		$scope.date = $rootScope.data.flawTable.date;
		$scope.list = null;

		//		$scope.too = function(){
		//			$scope.aa = 'bb'
		////			$scope.$apply();
		//			$rootScope.goto('defective.html')
		//		}

		$scope.query = function() {
			$scope.activated = true;
			api.query1.get(null, {
				date: $scope.date,
				productionLine: $scope.productionLine
					//            	time:$scope.time
			}, function(data) {
				$scope.activated = false;
				$scope.list = data;
				for(var i = 0; i < $scope.list.length; i++) {
					$scope.list[i].bu = ($scope.list[i].counts / $scope.list[i].output * 100).toFixed(1);
				}
			}, function(error) {
				$scope.activated = false;
				console.log(error);
			});
		}

		$scope.query();
		clearInterval($rootScope.intpoint);
	})
	.controller('query2Ctrl', function($scope, All_Time, api, $rootScope) {
		$scope.activated = true;
		$scope.productionLineList = [];
		$scope.allTimes = All_Time;
		$scope.productionLine = null;
		$scope.order = null;
		$scope.time = null;
		$scope.date = null;
		$scope.list = null;

		$rootScope.query = {
			flawTable: null
		}

		function init() {
			api.productionLine.get(null, {
				user: $rootScope.data.userName
			}, function(data) {
				$scope.productionLineList = data;
				$scope.activated = false;
			}, function(error) {
				console.log(error);
			});
		}
		init();

		$scope.query = function() {
			$scope.activated = true;
			api.query2.get(null, {
				date: ($scope.date).format("yyyy-MM-dd"),
				order: $scope.order,
				productionLine: $scope.productionLine.Name,
				time: $scope.time
			}, function(data) {
				$scope.activated = false;
				$scope.list = data;
				for(var i = 0; i < $scope.list.length; i++) {
					$scope.list[i].bu = ($scope.list[i].counts / $scope.list[i].output * 100).toFixed(1);
				}
			}, function(error) {
				$scope.activated = false;
				console.log(error);
			});
		}

		$scope.detail = function(flawTable) {
			$rootScope.query.flawTable = flawTable;
			//			console.dir($rootScope.query.flawTable)
			$rootScope.goto("queryDetail.html");
		}
	})
	.controller('queryDetailCtrl', function($scope, api, $rootScope) {
		$scope.activated = true;
		$scope.detail = [];
		$scope.temp = [];

		function init() {
			api.queryDetail.get(null, {
				GUID: $rootScope.query.flawTable.GUID
			}, function(data) {
				$scope.temp = data;
				for(var i in $scope.temp) {
					if($scope.temp[i].pos === 'front') {
						$scope.temp[i].posi = '前';
					} else {
						$scope.temp[i].posi = '后';
					}
				}

				$scope.position = [];
				$scope.flawNumbers = [];
				$scope.flawCounts = [];
				$scope.detail = [];

				for(var i = 0; i < $scope.temp.length; i++) {
					if($scope.position.indexOf($scope.temp[i].position) === -1) {
						$scope.position.push($scope.temp[i].position);
					}
				}
				for(var i = 0; i < $scope.position.length; i++) {
					$scope.num = '';
					$scope.count = 0;
					for(var j in $scope.temp) {
						if($scope.position[i] === $scope.temp[j].position) {
							$scope.num = $scope.num + $scope.temp[j].flawNumber + "/";
							$scope.count = $scope.count + 1;
						}
					}
					$scope.flawNumbers.push($scope.num);
					$scope.flawCounts.push($scope.count);
				}
				for(var i = 0; i < $scope.position.length; i++) {
					var x = {};
					x.id = i;
					x.position = $scope.position[i];
					x.flawNumbers = $scope.flawNumbers[i];
					x.flawCounts = $scope.flawCounts[i];
					x.output = $rootScope.query.flawTable.output;
					x.bu = (x.flawCounts / x.output * 100).toFixed(1);
					$scope.detail.push(x);
				}
				$scope.activated = false;
			}, function(error) {
				$scope.activated = false;
				console.log(error);
			});
		}
		init();

		$scope.edit = function() {
			api.styleType.get(null, {},
				function(data) {

					$rootScope.data.edit = true;
					$rootScope.data.flawTable = $rootScope.query.flawTable;
					$rootScope.data.flawTable.gmt = JSON.parse($rootScope.data.flawTable.gmt);
					$rootScope.data.flawDetails = $scope.temp;

					$scope.activated = false;
					$scope.models = data;

					for(var i = 0; i < $scope.models.length; i++) {
						if($scope.models[i].StyleName == $rootScope.data.flawTable.category) {
							$rootScope.data.flawTable.categoryCode = $scope.models[i].StyleCode;
							break;
						}
					}
					$rootScope.goto("defective.html");
				},
				function(error) {
					console.log(error);
				});

		}

	})
	.controller('yanhuo1Ctrl', function($scope, api, $rootScope, All_Time, $mdToast, AQL) {
		console.log('aa')
		$scope.defect = '';
		$scope.defectCode = ''

		$rootScope.weiyanData.CODETAIL.dataGUID = $rootScope.weiyanData.GUID
		$rootScope.weiyanData.CODETAIL.date = $rootScope.weiyanData.date;
		if($rootScope.weiyanData.auditType == '2nd') {
			$scope.auditType = false;
		} else {
			$scope.auditType = true;
		}

		$scope.transfrom = function() {
			if($scope.auditType == false) {
				$rootScope.weiyanData.auditType = '2nd';
			} else {
				$rootScope.weiyanData.auditType = '1st';
			}
		}
		$scope.clear = function() {
			$rootScope.weiyanData.CODETAIL = {
				dataGUID: $rootScope.weiyanData.GUID,
				userID: $rootScope.weiyanData.userID,
				date: $rootScope.weiyanData.date,
				groupID: $rootScope.weiyanData.banzu,
				GUID: $rootScope.NewGuid(),
				defectType: '',
				typeGUID: '',
				codeGUID: '',
				defectName: '',
				defectCode: '',
				QTY: 0,
				output: 0,
				imgSrc: 'img/white.jpg'

			}
			console.dir($rootScope.weiyanData.codeDtail)

		}

		$scope.changeProductLine = function() {
			$rootScope.weiyanData.CODETAIL.groupID = $rootScope.weiyanData.banzu;
			console.dir($rootScope.lastData)
		}

		$scope.changeNo = function() {

			switch($rootScope.weiyanData.AQL) {
				case '1.0':
					if($rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.AQL) {
						for(i = 0; i < 12; i++) {
							//					console.log(i)
							if(AQL[i].SampleLotStart <= $rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.yanshouNo <= AQL[i].SampleLotEnd) {
								//						console.log()
								$rootScope.weiyanData.chouYanNo = AQL[i].SampleSize;
								$rootScope.weiyanData.yunShouNo = AQL[i].Accept;
								break;
							} else if(10000 < $rootScope.weiyanData.yanshouNo) {
								$rootScope.weiyanData.chouYanNo = 315;
								$rootScope.weiyanData.yunShouNo = 7;
								break;
							}

						}
					} else {
						if(!$rootScope.weiyanData.yanshouNo) {
							$mdToast.show($mdToast.simple().content('验收数量不能为空'));
						} else {
							$mdToast.show($mdToast.simple().content('AQL不能为空'));
						}

					}
					break;
				case '1.5':
					if($rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.AQL) {
						for(i = 13; i < 24; i++) {
							//					console.log(i)
							if(AQL[i].SampleLotStart <= $rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.yanshouNo <= AQL[i].SampleLotEnd) {
								//						console.log($rootScope.weiyanData.yanshouNo)
								//						console.log(AQL[i].SampleLotEnd)
								$rootScope.weiyanData.chouYanNo = AQL[i].SampleSize;
								$rootScope.weiyanData.yunShouNo = AQL[i].Accept;
								break;
							} else if(10000 < $rootScope.weiyanData.yanshouNo) {
								$rootScope.weiyanData.chouYanNo = 315;
								$rootScope.weiyanData.yunShouNo = 10;
								break;
							}

						}
					} else {
						$mdToast.show($mdToast.simple().content('验收数量不能为空'));
					}
					break;
				case '2.0':
					if($rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.AQL) {
						for(i = 25; i < 36; i++) {
							//					console.log(i)
							if(AQL[i].SampleLotStart <= $rootScope.weiyanData.yanshouNo && $rootScope.weiyanData.yanshouNo <= AQL[i].SampleLotEnd) {
								//						console.log()
								$rootScope.weiyanData.chouYanNo = AQL[i].SampleSize;
								$rootScope.weiyanData.yunShouNo = AQL[i].Accept;
								break;
							} else if(10000 < $rootScope.weiyanData.yanshouNo) {
								$rootScope.weiyanData.chouYanNo = 315;
								$rootScope.weiyanData.yunShouNo = 14;
								break;
							}

						}
					} else {
						$mdToast.show($mdToast.simple().content('验收数量不能为空'));
					}
					break;
				default:
					break;
			}
		}
		console.dir($rootScope.weiyanData)

		$scope.changeQty = function() {
			if(!$rootScope.weiyanData.CODETAIL.codeGUID) {
				$rootScope.weiyanData.CODETAIL.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			}
		}
		$scope.mins = function() {
			if(!$rootScope.weiyanData.CODETAIL.codeGUID) {
				$rootScope.weiyanData.CODETAIL.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			} else {
				if($rootScope.weiyanData.CODETAIL.QTY > 0) {
					$rootScope.weiyanData.CODETAIL.QTY--;
				}

			}

		}
		$scope.maxs = function() {
			if(!$rootScope.weiyanData.CODETAIL.codeGUID) {
				$rootScope.weiyanData.CODETAIL.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			} else {
				$rootScope.weiyanData.CODETAIL.QTY++;
			}
		}

		$scope.choose = function() {
			$scope.dates = $rootScope.weiyanData.submitDates.list[$rootScope.weiyanData.po].mm;
		}

		$scope.changeDefectType1 = function() {
			for(i = 0; i < $scope.defectTypeList1.length; i++) {
				if($rootScope.weiyanData.CODETAIL.typeGUID == $scope.defectTypeList1[i].GUID) {
					$rootScope.weiyanData.CODETAIL.defectType = $scope.defectTypeList1[i].DefectTypeName;
				}
			}

			api.defectCode.get(null, {
				GUID: $rootScope.weiyanData.CODETAIL.typeGUID
			}, function(data) {
				console.log(data)
				$scope.defectCodeList1 = data;
				//$rootScope.weiyanData.CODETAIL.defectType = $scope.defect.DefectTypeName;

			}, function(error) {
				console.log(error);
			});
		}

		$scope.changeDefectCode = function() {
			for(i = 0; i < $scope.defectCodeList1.length; i++) {
				if($rootScope.weiyanData.CODETAIL.codeGUID == $scope.defectCodeList1[i].GUID) {
					$rootScope.weiyanData.CODETAIL.defectName = $scope.defectCodeList1[i].DefectName;
					$rootScope.weiyanData.CODETAIL.defectCode = $scope.defectCodeList1[i].DefectCode;
				}
			}
			//$rootScope.weiyanData.CODETAIL.defectCode = $scope.defectCode.DefectName;
			//			console.log($rootScope.weiyanData.CODETAIL)
		}

		$scope.focus = function() {
			api.getPo.get(null, {
				FEPOCode: $rootScope.weiyanData.fepo //'6KC34X13X01'
			}, function(data) {
				//				console.log('enter result')
				//				console.dir(data);
				$scope.dt = data;
				$rootScope.weiyanData.pos = {};
				$rootScope.weiyanData.submitDates = {
					po: [],
					list: {}
				};
				var ms = {};

				//$rootScope.weiyanData.submitDates=[data[0].DeliveryDate];
				for(var i = 1; i < data.length; i++) {
					ms[$scope.dt[i].CustomerPo] = $scope.dt[i].CustomerPo;
				}
				for(var j in ms) {
					//					console.log(j)
					$rootScope.weiyanData.pos[j] = j;
					$rootScope.weiyanData.submitDates.po.push(j);

				}
				for(var n in $rootScope.weiyanData.pos) {

					$rootScope.weiyanData.submitDates.list[n] = {
						mm: []
					}
					for(var j = 0; j < $scope.dt.length; j++) {
						if($rootScope.weiyanData.pos[n] == $scope.dt[j].CustomerPo) {
							$rootScope.weiyanData.submitDates.list[n].mm.push({
								date: data[j].DeliveryDate,
								qty: data[j].POQty,
								style: data[j].CompanyStyleCode
							});
						}
					}
				}

				//				console.log($rootScope.weiyanData.submitDates)
			}, function(error) {
				console.log(error);
			});;

		}
		$scope.aa = function() {
			if(!$rootScope.weiyanData.po) {
				$mdToast.show($mdToast.somple().content('请先选择交期'))
			}
		}
		$scope.selectDate = function() {
			//      	console.log($rootScope.weiyanData)
			//      	console.log($scope.dates)
			for(i = 0; i < $scope.dates.length; i++) {

				//      		console.log($rootScope.weiyanData.submitTime);
				//      		console.log(  $scope.dates[i].date)
				if($rootScope.weiyanData.submitTime == $scope.dates[i].date) {
					//      			console.log('ww')
					$rootScope.weiyanData.Style = $scope.dates[i].style;
					$rootScope.weiyanData.PoQty = $scope.dates[i].qty;
					break;
				}
			}
			console.log($rootScope.weiyanData.style);
		}
		$scope.big = function(t) {
			$scope.bigImg = $rootScope.weiyanData.codeDtail[t].imgSrc;
			document.getElementById('b').style.display = "block";
			document.getElementById('cen').style.display = "block";
		}

		$scope.upLoad = function() {

			console.dir($rootScope.weiyanData.CODETAIL)
			if($rootScope.weiyanData.output) {
				$rootScope.weiyanData.output = $rootScope.weiyanData.output + $rootScope.weiyanData.CODETAIL.QTY;
			} else {
				$rootScope.weiyanData.output = $rootScope.weiyanData.CODETAIL.QTY;
			}
			$rootScope.weiyanData.codeDtail.push($rootScope.weiyanData.CODETAIL);
			$scope.clear();
			//console.log($rootScope.weiyanData.CODETAIL)

		}

		$scope.getImage = function() {
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(path) {
				var a = [];
				a = path.split('/');
				plus.gallery.save(path);
				$scope.url = 'file://' + $rootScope.sd + '/DCIM/Camera/' + a[1];
			}, function(e) {
				outSet("取消拍照");
			});
		}
		$scope.up = function() {

			$rootScope.weiyanData.CODETAIL.imgSrc = $scope.url;
		}

		$scope.delect = function() {

			$rootScope.weiyanData.CODETAIL.imgSrc = 'img/white.jpg';

		}

		$scope.delectDtails = function(i) {
			$rootScope.weiyanData.codeDtail.splice(i, 1);
		}

		$scope.next1 = function(t) {
			if($rootScope.weiyanData.Style && $rootScope.weiyanData.banzu && $rootScope.weiyanData.yanshouNo) {
				if(t == 1) {
					$rootScope.sizeName = '上衣尺寸表'
					$rootScope.dd = '上衣';
					$rootScope.categorySize = [{
						buwei: "胸围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "腰围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "下摆",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "肩宽",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "袖长",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "后身长",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "领围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}];

				} else {
					$rootScope.sizeName = '裤子尺寸表'
					$rootScope.dd = '裤子';
					$rootScope.categorySize = [{
						buwei: "前浪",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "后浪",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "腰围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "臀围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "腿围",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "脚口",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "内长",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}, {
						buwei: "外长",
						list: {
							GMT1: '',
							GMT2: '',
							GMT3: '',
							GMT4: '',
							GMT5: '',
							GMT6: ''
						}
					}];
				}
				$rootScope.goto('yanhuo2.html')
			} else {
				if(!$rootScope.weiyanData.banzu) {
					$mdToast.show($mdToast.simple().content('请填写班组！'))
				} else if(!$rootScope.weiyanData.Style) {
					$mdToast.show($mdToast.simple().content('请填写Style！'))
				} else {
					$mdToast.show($mdToast.simple().content('请填写抽验数量！'))
				}
			}
		}

		function init() {

			if($rootScope.weiyanData.submitDates.list && $rootScope.weiyanData.po) {

				$scope.dates = $rootScope.weiyanData.submitDates.list[$rootScope.weiyanData.po].mm;
			}

			if($rootScope.weiyanData.CODETAIL.typeGUID) {
				api.defectCode.get(null, {
					GUID: $rootScope.weiyanData.CODETAIL.typeGUID
				}, function(data) {
					console.log(data)
					$scope.defectCodeList1 = data;
					//$rootScope.weiyanData.CODETAIL.defectType = $scope.defect.DefectTypeName;

				}, function(error) {
					console.log(error);
				});
			}
			//瑕疵类别
			api.defectType.get(null, {},
				function(data) {

					$scope.defectTypeList1 = data;
					//				alert(JSON.stringify($scope.defectTypeList))
					//					console.dir(data);
				},
				function(error) {
					console.log(error);
				});

			//产线
			api.productionLine.get(null, {
				user: $rootScope.data.userName
			}, function(data) {
				console.log(data)
				$scope.productionLineList = data;
			}, function(error) {
				console.log(error);
			});

		}
		init();

	})
	.controller('yanhuo2Ctrl', function($scope, api, $rootScope, All_Time, $mdToast) {
		$scope.buSize = -1;

		$scope.combs = [];
		$scope.sizes = [];
		if($rootScope.weiyanData.result == 'PASS') {
			$scope.result = true;

		} else {
			$scope.result = false;
		}
		$scope.catecotrySize = {
			GMT1: "",
			GMT2: '',
			GMT3: '',
			GMT4: '',
			GMT5: '',
			GMT6: ''
		};
		$scope.catecotryComb = {
			GMT1: "",
			GMT2: '',
			GMT3: '',
			GMT4: '',
			GMT5: '',
			GMT6: ''
		};

		$scope.aa = function(t) {
			console.log(t)
			if(!$scope.catecotryComb[t]) {
				$mdToast.show($mdToast.simple().content('请先输入COMB'))
			}
		}
		$scope.changeComb = function(t) {
			switch(t) {
				case 1:
					$scope.sizes1 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT1].aa;
					break;
				case 2:
					$scope.sizes2 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT2].aa;
					break;
				case 3:
					$scope.sizes3 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT3].aa;
					break;
				case 4:
					$scope.sizes4 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT4].aa;
					break;
				case 5:
					$scope.sizes5 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT5].aa;
					break;
				case 6:
					$scope.sizes6 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb.GMT6].aa;
					break;

				default:
					break;
			}

		}

		$scope.save = function(t, n, m) {

			$scope.index = t; //所在的部位
			$scope.i = m; //所在的GMT

			document.getElementById('n').style.display = "block";
		}
		$scope.submit = function() {
			document.getElementById('n').style.display = "none";

			switch($scope.i) {
				case 1:
					$scope.categorySize[$scope.index].list.GMT1 = $scope.buSize;
					break;
				case 2:
					$scope.categorySize[$scope.index].list.GMT2 = $scope.buSize;
					break;
				case 3:
					$scope.categorySize[$scope.index].list.GMT3 = $scope.buSize;
					break;
				case 4:
					$scope.categorySize[$scope.index].list.GMT4 = $scope.buSize;
					break;
				case 5:
					$scope.categorySize[$scope.index].list.GMT5 = $scope.buSize;
					break;
				case 6:
					$scope.categorySize[$scope.index].list.GMT6 = $scope.buSize;
					break;
				default:
					break;
			}

			var gmt = {};
			//console.dir($scope.catecotryComb)
			for(var n in $scope.catecotryComb) {
				if($scope.catecotrySize[n]) {

					gmt[n] = {
						comb: $scope.catecotryComb[n],
						size: $scope.catecotrySize[n],
						list: []
					};
					for(i = 0; i < $rootScope.categorySize.length; i++) {
						gmt[n].list.push({
							PartName: $rootScope.categorySize[i].buwei,
							size: $rootScope.categorySize[i].list[n]
						});

					}

				}
			}

			$rootScope.weiyanData.gmt = gmt;
			console.log($rootScope.weiyanData.gmt);

		}

		$scope.mins = function() {
			if($rootScope.data.flawTable.unit == 'CM') {
				$scope.buSize = Number($scope.buSize) - 0.125;
				$scope.buSize = $scope.buSize.toFixed(3);
			} else {
				$scope.buSize = Number($scope.buSize) - 0.1;
				$scope.buSize = $scope.buSize.toFixed(3);
			}

		}

		$scope.maxs = function() {
			if($rootScope.data.flawTable.unit == 'CM') {
				$scope.buSize = Number($scope.buSize) + 0.125;
				$scope.buSize = $scope.buSize.toFixed(3);
			} else {
				$scope.buSize = Number($scope.buSize) + 0.1;
				$scope.buSize = $scope.buSize.toFixed(3);
			}
		}

		$scope.refer = function() {

			api.finalTable.post(null, $rootScope.weiyanData, function(data) {
				if(data.status == 1) {

					api.finalDetail.post(null, {
							details: $rootScope.weiyanData.codeDtail
						},
						function(data) {
							if(data.status == 1) {
								$mdToast.show($mdToast.simple().content('提交成功!'));
								$rootScope.clearWeiyan();
								$rootScope.goto('yanhuo1.html');

							}
						},
						function(error) {
							$mdToast.show($mdToast.simple().content('提交失败!'));
						});
				}
			}, function(error) {
				$scope.activated = false;
				$mdToast.show($mdToast.simple().content('提交失败!'));
			});

		}

		$scope.camera = function() {
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(path) {
				var a = [];
				a = path.split('/');
				plus.gallery.save(path);
				$scope.url = 'file://' + $rootScope.sd + '/DCIM/Camera/' + a[1];
			}, function(e) {
				outSet("取消拍照");
			});
		}

		$scope.add = function() {
			$rootScope.weiyanData.sizeImg = $scope.url;
		}

		$scope.delect = function() {

			$rootScope.weiyanData.sizeImg = 'img/white.jpg';

		}
		$scope.transform = function() {
			if($scope.result == true) {
				$rootScope.weiyanData.result = 'PASS'
			} else {
				$rootScope.weiyanData.result = 'FAIL'
			}
		}

		function init() {
			if($rootScope.weiyanData.category == $rootScope.dd) {
				if($rootScope.weiyanData.gmt) {
					for(var i in $rootScope.weiyanData.gmt) {
						$scope.catecotryComb[i] = $rootScope.weiyanData.gmt[i].comb;
						$scope.catecotrySize[i] = $rootScope.weiyanData.gmt[i].size;
						for(var n = 0; n < $rootScope.categorySize.length; n++) {
							if($rootScope.weiyanData.gmt[i].list[n].size) {
								$rootScope.categorySize[n].list[i] = $rootScope.weiyanData.gmt[i].list[n].size;
							}
							//$rootScope.categorySize[n].list[i]= $rootScope.weiyanData.gmt[n].list[i].size;
						}

						switch(i) {
							case 'GMT1':
								$scope.sizes1 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							case 'GMT2':
								$scope.sizes2 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							case 'GMT3':
								$scope.sizes3 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							case 'GMT4':
								$scope.sizes4 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							case 'GMT5':
								$scope.sizes5 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							case 'GMT6':
								$scope.sizes6 = $rootScope.weiyanData.sizes.size[$scope.catecotryComb[i]].aa;
								break;
							default:
								break;
						}
					}

				}
			} else {
				$rootScope.weiyanData.category = $rootScope.dd;
				$rootScope.weiyanData.gmt = {};
			}

			//			console.dir($scope.catecotryComb);
			//			console.dir($scope.catecotrySize)
			//			console.dir($rootScope.categorySize)
			api.getSize.get(null, {
				FEPOCode: '7KC34O32C03'

			}, function(data) {
				console.dir(data);
				//				console.log('enter result')
				//				console.dir(data);
				$scope.dt = data;
				$scope.cate = {
					comb: [],
					size: {}
				};
				//					$rootScope.weiyanData.pos={};
				//					$rootScope.weiyanData.submitDates={
				//						po:[],
				//						list:{}
				//					};
				var ms = {};
				$rootScope.weiyanData.combs = {};

				for(var i = 1; i < data.length; i++) {
					ms[$scope.dt[i].CombName] = $scope.dt[i].CombName;
				}
				for(var j in ms) {
					//					console.log(j)
					$rootScope.weiyanData.combs[j] = j;
					$scope.cate.comb.push(j);

				}

				for(var n in $rootScope.weiyanData.combs) {
					//				
					$scope.cate.size[n] = {
						aa: []
					}
					for(var j = 0; j < $scope.dt.length; j++) {
						if($rootScope.weiyanData.combs[n] == $scope.dt[j].CombName) {
							$scope.cate.size[n].aa.push(
								$scope.dt[j].SizeCode
							);
						}
					}
				}
				$rootScope.weiyanData.sizes = $scope.cate;
				console.log($rootScope.weiyanData.sizes);
			}, function(error) {
				console.log(error);
			});
		}
		init();
	})
	.controller('zhuangxiang1Ctrl', function($scope, api, $rootScope, All_Time, $mdToast) {
		$scope.dateTime = $rootScope.getDate();
		$scope.defect = '';
		$scope.defectCode = '';

		$rootScope.lastData.defectDetail.dataGUID = $rootScope.lastData.GUID;
		$rootScope.lastData.defectDetail.date = $rootScope.lastData.date;
		console.log($rootScope.lastData)

		//贴纸
		if($rootScope.lastData.tiezhi == 'PASS') {
			$scope.tiezhi = true;
		} else {
			$scope.tiezhi = false;
		}
		//辅料
		if($rootScope.lastData.fuliao == 'PASS') {
			$scope.fuliao = true;
		} else {
			$scope.fuliao = false;
		}
		//代码
		if($rootScope.lastData.daima == 'PASS') {
			$scope.daima = true;
		} else {
			$scope.daima = false;
		}
		//MD
		if($rootScope.lastData.MD == 'PASS') {
			$scope.MD = true;
		} else {
			$scope.MD = false;
		}
		//箱内件数
		if($rootScope.lastData.inerNumber == 'PASS') {
			$scope.inerNumber = true;
		} else {
			$scope.inerNumber = false;
		}
		//COC
		if($rootScope.lastData.COC == 'PASS') {
			$scope.COC = true;
		} else {
			$scope.COC = false;
		}
		//result
		if($rootScope.lastData.result == 'PASS') {
			$scope.result = true;
		} else {
			$scope.result = false;
		}
		if($rootScope.lastData.auditType == '2nd') {
			$scope.auditType = false;
		} else {
			$scope.auditType = true;
		}

		if(window.localStorage.getItem('packageNo')) {
			$rootScope.lastData.packageNo = window.localStorage.getItem('packageNo');
		}

		$scope.changeProductLine = function() {
			$rootScope.lastData.defectDetail.groupID = $rootScope.lastData.banzu;
			console.dir($rootScope.lastData)
		}

		$scope.barcode = function() {
			var nw = plus.ui.createWindow("barcode.html");
			nw.show();
			$scope.int1 = setInterval(function() {

				if(window.localStorage.getItem('packageNo') && $rootScope.lastData.packageNo != window.localStorage.getItem('packageNo')) {
					console.log('aa');
					$rootScope.lastData.packageNo = window.localStorage.getItem('packageNo');
					$scope.$apply();
				}
			}, 2000);

		}

		$scope.changeQty = function() {
			if(!$scope.defectCodeList1) {
				$rootScope.LastData.defectDetail.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			}
		}
		$scope.mins = function() {
			if(!$scope.defectCodeList1) {
				$rootScope.lastData.defectDetail.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			} else {
				if($rootScope.lastData.defectDetail.QTY > 0) {
					$rootScope.lastData.defectDetail.QTY--;
				}

			}

		}
		$scope.maxs = function() {

			if(!$scope.defectCodeList1) {
				$rootScope.lastData.defectDetail.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			} else {
				$rootScope.lastData.defectDetail.QTY++;
			}
		}

		$scope.changePackage = function() {
			window.localStorage.setItem('packageNo', $rootScope.lastData.packageNo);
		}
		$scope.big = function(t) {
			$scope.bigImg = $rootScope.lastData.DefectDetails[t].imgSrc;
			document.getElementById('b').style.display = "block";
			document.getElementById('cen').style.display = "block";
		}

		$scope.camera = function() {
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(path) {
				var a = [];
				a = path.split('/');
				plus.gallery.save(path);
				$scope.url = 'file://' + $rootScope.sd + '/DCIM/Camera/' + a[1];
			}, function(e) {
				outSet("取消拍照");
			});
		}

		$scope.add = function() {
			$scope.defectImg = $scope.url;
			$rootScope.lastData.defectDetail.imgSrc = $scope.defectImg;
		}

		$scope.delect = function() {

			$scope.defectImg = 'img/white.jpg';

		}

		$scope.delectDtails = function(i) {
			$rootScope.lastData.DefectDetails.splice(i, 1);
		}

		$scope.clear = function() {
			$rootScope.lastData.defectDetail = {
				dataGUID: $rootScope.lastData.GUID,
				userID: $rootScope.lastData.userID,
				date: $rootScope.lastData.date,
				groupID: $rootScope.lastData.banzu,
				GUID: $rootScope.NewGuid(),
				defectType: '',
				typeGUID: '',
				codeGUID: '',
				defectName: '',
				defectCode: '',
				QTY: 0,
				output: 0,
				imgSrc: 'img/white.jpg'

			}

		}

		$scope.transfrom = function(t) {
			switch(t) {
				case 1:
					if($scope.tiezhi == true) {
						$rootScope.lastData.tiezhi = 'PASS';
					} else {
						$rootScope.lastData.tiezhi = 'FAIL';
					}
					break;
				case 2:
					if($scope.fuliao == true) {
						$rootScope.lastData.fuliao = 'PASS';
					} else {
						$rootScope.lastData.fuliao = 'FAIL';
					}
					break;
				case 3:
					if($scope.daima == true) {
						$rootScope.lastData.daima = 'PASS';
					} else {
						$rootScope.lastData.daima = 'FAIL';
					}
					break;
				case 4:
					if($scope.MD == true) {
						$rootScope.lastData.MD = 'PASS';
					} else {
						$rootScope.lastData.MD = 'FAIL';
					}
					break;
				case 5:
					if($scope.inerNumber == true) {
						$rootScope.lastData.inerNumber = 'PASS';
					} else {
						$rootScope.lastData.inerNumber = 'FAIL';
					}
					break;
				case 6:
					if($scope.COC == true) {
						$rootScope.lastData.COC = 'PASS';
					} else {
						$rootScope.lastData.COC = 'FAIL';
					}
					break;
				case 7:
					if($scope.result == true) {
						$rootScope.lastData.result = 'PASS';
					} else {
						$rootScope.lastData.result = 'FAIL';
					}
					break;
				case 8:
					if($scope.auditType == false) {
						$rootScope.lastData.auditType = '2nd';
					} else {
						$rootScope.lastData.auditType = '1st';
					}

					break;
				default:
					break;
			}
		}

		$scope.submit = function() {
			api.packageTable.post(null, $rootScope.lastData, function(data) {
				if(data.status == 1) {
					console.log($rootScope.lastData.DefectDetails)
					api.packageDetail.post(null, {
							details: $rootScope.lastData.DefectDetails
						},
						function(data) {
							if(data.status == 1) {
								$mdToast.show($mdToast.simple().content('提交成功!'));
								$rootScope.clearLast();
								$scope.auditType == true;
								$scope.result = false;
								$scope.COC = false;
								$scope.inerNumber = false;
								$scope.MD = false;
								$scope.daima = false;
								$scope.fuliao = false;
								$scope.tiezhi = false;
								$scope.auditType = true;
								window.clearInterval($scope.int1)
									//			console.dir($rootScope.lastData)

							}
						},
						function(error) {
							$mdToast.show($mdToast.simple().content('提交失败!'));
						});
				}
			}, function(error) {
				$scope.activated = false;
				$mdToast.show($mdToast.simple().content('提交失败!'));
			});

		}

		$scope.focus = function() {

			api.getPo.get(null, {
				FEPOCode: $rootScope.lastData.fepo //'6KC34X13X01'
			}, function(data) {
				//				console.log('enter result')
				console.dir(data);
				$scope.dt = data;
				$rootScope.lastData.pos = {};
				$rootScope.lastData.submitDates = {
					po: [],
					list: {}
				};
				var ms = {};

				//$rootScope.weiyanData.submitDates=[data[0].DeliveryDate];
				for(var i = 1; i < data.length; i++) {
					ms[$scope.dt[i].CustomerPo] = $scope.dt[i].CustomerPo;
				}
				for(var j in ms) {
					console.log(j)
					$rootScope.lastData.pos[j] = j;
					$rootScope.lastData.submitDates.po.push(j);

				}
				for(var n in $rootScope.lastData.pos) {

					$rootScope.lastData.submitDates.list[n] = {
						mm: []
					}
					for(var j = 0; j < $scope.dt.length; j++) {
						if($rootScope.lastData.pos[n] == $scope.dt[j].CustomerPo) {
							$rootScope.lastData.submitDates.list[n].mm.push({
								date: data[j].DeliveryDate,
								qty: data[j].POQty,
								style: data[j].CompanyStyleCode
							});
						}
					}
				}

				console.log($rootScope.lastData.submitDates)
			}, function(error) {
				console.log(error);
			});;

		}
		$scope.choose = function() {

			$scope.dates = $rootScope.lastData.submitDates.list[$rootScope.lastData.po].mm;
		}

		$scope.aa = function() {
			if(!$rootScope.lastData.po) {
				$mdToast.show($mdToast.somple().content('请先选择交期'))
			}
		}
		$scope.selectDate = function() {
			//      	console.log($rootScope.lastData)
			//      	console.log($scope.dates)
			for(i = 0; i < $scope.dates.length; i++) {

				//      		console.log($rootScope.lastData.submitTime);
				//      		console.log(  $scope.dates[i].date)
				if($rootScope.lastData.submitTime == $scope.dates[i].date) {
					//      			console.log('ww')
					$rootScope.lastData.style = $scope.dates[i].style;
					$rootScope.lastData.poQty = $scope.dates[i].qty;
					break;
				}
			}
			console.log($rootScope.lastData.style);
		}

		$scope.upLoad = function() {
			if($rootScope.lastData.output) {
				$rootScope.lastData.output = $rootScope.lastData.output + $rootScope.lastData.defectDetail.QTY;
			} else {
				$rootScope.lastData.output = $rootScope.lastData.defectDetail.QTY;
			}
			$rootScope.lastData.DefectDetails.push($rootScope.lastData.defectDetail);
			$scope.clear();

		}

		$scope.changeQty = function() {
			if(!$scope.defectCodeList1) {
				$scope.defectDetail.QTY = 0;
				$mdToast.show($mdToast.simple().content('瑕疵不可为空白！'));
			}
		}

		$scope.changeDefectType1 = function() {

			for(i = 0; i < $scope.defectTypeList1.length; i++) {
				if($rootScope.lastData.defectDetail.typeGUID == $scope.defectTypeList1[i].GUID) {
					$rootScope.lastData.defectDetail.defectType = $scope.defectTypeList1[i].DefectTypeName;
				}
			}
			api.defectCode.get(null, {
				GUID: $rootScope.lastData.defectDetail.typeGUID
			}, function(data) {
				console.log(data)
				$scope.defectCodeList1 = data;
				//$rootScope.weiyanData.CODETAIL.defectType = $scope.defect.DefectTypeName;

			}, function(error) {
				console.log(error);
			});

		}

		$scope.changeDefectCode = function() {
			for(i = 0; i < $scope.defectCodeList1.length; i++) {
				if($rootScope.lastData.defectDetail.codeGUID == $scope.defectCodeList1[i].GUID) {
					$rootScope.lastData.defectDetail.defectName = $scope.defectCodeList1[i].DefectName;
					$rootScope.lastData.defectDetail.defectCode = $scope.defectCodeList1[i].DefectCode;
				}
			}

		}

		function init() {

			if($rootScope.lastData.submitDates.list && $rootScope.lastData.po) {

				$scope.dates = $rootScope.lastData.submitDates.list[$rootScope.lastData.po].mm;
			}

			if($rootScope.lastData.defectDetail.typeGUID) {
				api.defectCode.get(null, {
					GUID: $rootScope.lastData.defectDetail.typeGUID
				}, function(data) {
					console.log(data)
					$scope.defectCodeList1 = data;
					//$rootScope.weiyanData.CODETAIL.defectType = $scope.defect.DefectTypeName;

				}, function(error) {
					console.log(error);
				});
			}

			//瑕疵类别
			api.defectType.get(null, {},
				function(data) {

					$scope.defectTypeList1 = data;
					//				alert(JSON.stringify($scope.defectTypeList))
				},
				function(error) {
					console.log(error);
				});

		}
		init();
	})
	.controller('zhuangxiang2Ctrl', function($scope, api, $rootScope, All_Time, $mdToast) {
		$scope.vasImage = [];
		$scope.camera = function() {
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(path) {
				var a = [];
				a = path.split('/');
				plus.gallery.save(path);
				$scope.url = 'file://' + $rootScope.sd + '/DCIM/Camera/' + a[1];
			}, function(e) {
				outSet("取消拍照");
			});
		}

		$scope.refer = function() {
			$mdToast.show($mdToast.simple().content('提交成功'));
			$rootScope.goto('zhuangxiang1.html');
		}

		$scope.add = function() {
			$scope.defectImg = $scope.url;
			$rootScope.lastData.vasImg.push($scope.defectImg);
		}

		$scope.delectDtails = function(i) {
			$rootScope.lastData.vasImg.splice(i, 1);
		}

		$scope.big = function(t) {
			$scope.bigImg = $rootScope.lastData.vasImg[t];
			document.getElementById('b').style.display = "block";
			document.getElementById('cen').style.display = "block";
		}

	});
// src/i18n/ui.ts

export const languages = {
    en: 'English',
    'zh-hk': '繁體中文',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'site.title': 'Ferry Easy',
        'nav.back': 'Back',
        'header.next_departures': 'Next Departures',
        'header.upcoming': 'Upcoming Schedules',
        'subtitle.global': 'Across all routes',
        'subtitle.filtered': 'Within next 120 mins',
        'input.origin': 'Origin',
        'input.dest': 'Destination',
        'placeholder.origin': 'From where?',
        'placeholder.dest': 'To where?',
        'btn.today': 'Today',
        'status.loading': 'Loading...',
        'status.no_data': 'No upcoming departures found soon.',
        'status.closing': 'Closing',
        'status.boarding': 'Boarding',
        'status.ontime': 'On Time',
        'status.fast': 'Fast Ferry',
        'label.mon_fri': 'Mon-Fri Only',
        'label.sat': 'Sat Only',
        'label.sun_ph': 'Sun & PH',
        'text.direction': 'Current Direction:',
        'text.min': 'min',
    },
    'zh-hk': {
        'site.title': 'Ferry Easy 搭船易',
        'nav.back': '返回',
        'header.next_departures': '下一班船',
        'header.upcoming': '即將開出',
        'subtitle.global': '顯示所有航線',
        'subtitle.filtered': '未來 120 分鐘班次',
        'input.origin': '出發地',
        'input.dest': '目的地',
        'placeholder.origin': '從哪裡出發？',
        'placeholder.dest': '想去哪裡？',
        'btn.today': '今日',
        'status.loading': '載入中...',
        'status.no_data': '暫時沒有即將開出的航班',
        'status.closing': '即將關閘',
        'status.boarding': '正在登船',
        'status.ontime': '準時',
        'status.fast': '快船',
        'label.mon_fri': '只限一至五',
        'label.sat': '只限週六',
        'label.sun_ph': '週日及假期',
        'text.direction': '目前方向：',
        'text.min': '分鐘',
    },
} as const;
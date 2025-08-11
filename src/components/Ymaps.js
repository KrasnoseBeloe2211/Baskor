import React, { useEffect, useRef } from 'react'

const YandexMap = () => {
	const mapRef = useRef(null)
	const isMapInited = useRef(false) // Флаг инициализации

	useEffect(() => {
		if (isMapInited.current) return
		isMapInited.current = true

		const initMap = () => {
			window.ymaps.ready(() => {
				const map = new window.ymaps.Map(mapRef.current, {
					center: [55.657179, 37.551573],
					zoom: 16,
				})

				const placemark = new window.ymaps.Placemark(
					[55.657179, 37.551573],
					{
						balloonContentHeader: 'ПТК Баскор',
						balloonContentBody: 'Москва, Научный проезд, 6',
						hintContent: 'ПТК Баскор',
					},
					{ preset: 'islands#redDotIcon' }
				)

				map.geoObjects.add(placemark)
			})
		}

		if (!window.ymaps) {
			const script = document.createElement('script')
			script.src =
				'https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU'
			script.type = 'text/javascript'
			script.onload = initMap
			document.head.appendChild(script)
		} else {
			initMap()
		}
	}, [])

	return <div ref={mapRef} style={{ width: '50%', height: '400px' }} />
}

export default YandexMap

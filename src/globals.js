/* eslint-disable no-undef */
export default function () {
	return {
		// Public url
		publicUrl: process.env.VUE_APP_API_URL || 'http://localhost:4000',

		apiKey: process.env.VUE_APP_API_KEY || '',

		// Check for RTL layout
		get isRTL () {
			return document.documentElement.getAttribute('dir') === 'rtl' ||
				document.body.getAttribute('dir') === 'rtl'
		},

		// Check if IE
		get isIEMode () {
			return typeof document.documentMode === 'number'
		},

		// Check if IE10
		get isIE10Mode () {
			return this.isIEMode && document.documentMode === 10
		},

		// Animate scrollTop
		scrollTop (to, duration, element = document.scrollingElement || document.documentElement) {
			if (element.scrollTop === to) return
			const start = element.scrollTop
			const change = to - start
			const startDate = +new Date()

			// t = current time; b = start value; c = change in value; d = duration
			const easeInOutQuad = (t, b, c, d) => {
				t /= d / 2
				if (t < 1) return c / 2 * t * t + b
				t--
				return -c / 2 * (t * (t - 2) - 1) + b
			}

			const animateScroll = () => {
				const currentDate = +new Date()
				const currentTime = currentDate - startDate
				element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration))
				if (currentTime < duration) {
					requestAnimationFrame(animateScroll)
				} else {
					element.scrollTop = to
				}
			}

			animateScroll()
		}
	}
}
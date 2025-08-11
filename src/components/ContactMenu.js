import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactMenu({ contactMenu, closeContactMenu }) {
	const formRef = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_cu1awmm', // ID сервиса из EmailJS
				'template_kodignn', // ID шаблона
				formRef.current,
				'Fm1mVQCL0PlOlNGEh' // Публичный ключ
			)
			.then(
				result => {
					console.log('Сообщение отправлено!', result.text)
					alert('Заявка успешно отправлена!')
					e.target.reset()
				},
				error => {
					console.error('Ошибка при отправке', error.text)
					alert('Произошла ошибка. Попробуйте ещё раз.')
				}
			)
	}

	return (
		<div className={contactMenu}>
			<div className='contact_form'></div>

			<form ref={formRef} onSubmit={sendEmail} className='contact_form'>
				<button type='button' className='close_btn' onClick={closeContactMenu}>
					<svg
						className='close_btn_svg'
						xmlns='http://www.w3.org/2000/svg'
						id='a3764f6b-d60e-4c82-b635-15a2a285578b'
						data-name='Layer 1'
						width='19.373'
						height='18.4536'
						viewBox='0 0 19.373 18.4536'
					>
						<polygon points='19.373 1.454 18 0 9.687 7.852 1.373 0 0 1.454 8.23 9.227 0 17 1.373 18.454 9.687 10.602 18 18.454 19.373 17 11.143 9.227 19.373 1.454'></polygon>
					</svg>
				</button>
				<h1>ОСТАВЬТЕ ЗАЯВКУ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h1>
				<input name='name' className='contact_input' placeholder='Имя' />
				<input
					name='user_phone'
					className='contact_input'
					placeholder='Телефон'
				/>
				<button type='submit' className='submit_btn contact_form_btn'>
					ОТПРАВИТЬ
				</button>

				<div className='politics'>
					<p className='p'>Нажимая кнопку отправить, Вы принимаете условия </p>
					<a href='#!' className='p pol_link'>
						Политики конфиденциальности
					</a>
				</div>
			</form>
		</div>
	)
}

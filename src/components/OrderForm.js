import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Title from './Title'

export default function OrderForm() {
	const formRef = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_cu1awmm', // ID сервиса из EmailJS
				'template_lq5sfgo', // ID шаблона
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
		<div className='order_form'>
			<Title
				smallTitle='Оставьте заявку'
				bigTitle='Менеджер свяжется с вами в течение часа'
			/>
			<form ref={formRef} onSubmit={sendEmail} className='form'>
				<input
					className='contact_input order_form'
					placeholder='Ваше имя'
					name='name'
					required
				/>
				<input
					className='contact_input order_form'
					placeholder='Наименование организации'
					name='company_name'
				/>
				<input
					className='contact_input order_form'
					placeholder='Телефон*'
					name='user_phone'
					required
				/>
				<input
					className='contact_input order_form'
					placeholder='Email'
					name='user_email'
					type='email'
				/>
				<textarea
					placeholder='Укажите тип объекта'
					className='contact_input order_form'
					name='object_type'
				/>
				<button type='submit' className='submit_btn order_btn'>
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

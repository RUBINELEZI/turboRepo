'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Card } from 'ui'
import $ from './services.module.scss'
import cx from 'classnames'

const ServicesSelector = ({ session, categories }) => {
  const [category, setCategory] = useState(null)
  const menuRef = useRef()

  const toggleCategory = ev => {
    const cat = ev.target.textContent
    if (cat === category) {
      setCategory(null)
    } else {
      setCategory(cat)
    }
  }

  return (
    <div ref={menuRef}  className={cx($.servicesNav, category && $.active)}>
      <ul className={$.categoriesNav}>
        {categories.map(cat => (
          <li key={cat.id} className={cat === category ? $.active : ''}>
            <span onClick={toggleCategory}>{cat.name}</span>
          </li>
        ))}
      </ul>
      <div className={$.subMenu}>
        {categories.map(cat => (
          <div
            key={cat.id}
            className={cx($.services, cat.name === category && $.active)}
          >
            <ul>
              {cat.services.map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.name}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSelector

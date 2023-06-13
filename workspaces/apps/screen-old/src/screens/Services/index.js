import Link from 'next/link'
import { Card } from 'ui'
import { Button } from 'ui/form'
import styles from './services.module.scss'

const ServicesScreen = ({ salons, service }) => {
  return (
    <div className={styles.servicesScreen}>
      <Card title={service}>
        <div className={styles.salons}>
          {salons.map((salon) => (
            <div key={salon._id}>
              <Card title={salon.name}>
                <Link href={`/book?service=${service}&salon=${salon.name}`}>
                  <Button>Book</Button>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default ServicesScreen

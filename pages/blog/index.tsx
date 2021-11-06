import Link from 'next/link'
import Layout from '../../components/layouts/Layout'
import { client } from '../../lib/client'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material'
import { omit, formatDate } from '../../utils/omit'

const Blog = ({ blog }) => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Blog</h1>
    {blog.map((blog) => (
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <Card sx={{ maxWidth: 345, margin: 2, float: 'left' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={blog.thumbnail.url}
              alt="blog thumbnail"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="overline" color="text.secondary">
                {formatDate(blog.createdAt)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {omit(blog.subtitle, 42)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    ))}
  </Layout>
)

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })
  console.log(data)
  console.log(data.contents[0].thumbnail)
  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Blog
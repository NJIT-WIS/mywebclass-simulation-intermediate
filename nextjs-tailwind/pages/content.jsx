import ContentElements from '../components/ContentElements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TableOfContents from '../components/TableOfContents'
function Content () {
  return (
    <div class='h-full'>
      <Header />
      <div class='mx-auto container w-5/6 h-screen'>
        <div class='flex flex-row'>
          <div class='basis-1/4'>
            <TableOfContents />
          </div>
          <div class='basis-3/4'>
            <ContentElements />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Content

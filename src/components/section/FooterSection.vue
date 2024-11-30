<template>
  <footer id="footer">
    <section id="main-footer">
      <!-- 連結 -->
      <div v-for="(footer, index) in footers" :key="index">
        <h3>{{ $t("footer." + footer.title) }}</h3>
        <ul>
          <li v-for="(link, idx) in footer.links" :key="idx">
            <a
              :href="link.href"
              v-html="link.name"
              target="_blank"
              title="另開新視窗"
            ></a>
          </li>
        </ul>
      </div>
      <!-- 資訊 -->
      <div class="info">
        <h3>地址</h3>
        <p class="address">10617台北市大安區羅斯福路四段1號</p>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.158758621583!2d121.50924813054208!3d25.02915808041867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a989fe322ea9%3A0x21750404ee1d7f66!2z5ZyL56uL6Ie654Gj5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1732971834244!5m2!1szh-TW!2stw"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    <section id="sub-footer">
      <p>{{ $t("footer.copyright", { year: getYear }) }}</p>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection",
  data() {
    return {
      footers: [
        {
          title: "friend",
          links: [
            {
              name: "成大獸文化社 | 臉書",
              href: "https://www.facebook.com/NCKUFurry/",
            },
            {
              name: "雲科大獸文化社 | 臉書",
              href: "https://www.facebook.com/profile.php?id=61567748815733",
            },
          ],
        },
        {
          title: "media",
          links: [
            {
              name: "Facebook",
              href: "https://www.facebook.com/NTUFurry/?locale=zh_TW",
            },
            {
              name: "Youtube",
              href: "#",
            },
            {
              name: "Ingstram",
              href: "https://www.instagram.com/furriesatntu/",
            },
            {
              name: "Twitter",
              href: "https://x.com/NTUFurries",
            },
            {
              name: "Mail",
              href: "mailto:ntufurry@gmail.com",
            },
          ],
        },
        {
          title: "operation",
          links: [],
        },
      ],
    };
  },
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>
$primary-darker-color: #0d0d0d;
$primary-dark-color: #733439;
$primary-color: #825500;
$primary-light-color: #f0efd8;
$primary-lighter-color: #f2f2f2;
$white: #ffffff;
$black: #000000;
$dark: #201d17;
$darker: #131111;

$footer-padding: 1rem 80px;

footer#footer {
  position: absolute;
  bottom: 0;
  color: $white;
  width: 100%;
  section#main-footer {
    padding: $footer-padding;
    padding-top: 2rem;
    background: $dark;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    div {
      &.info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
      h3 {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
      }
      p.address {
        margin: 1rem 0;
        font-size: 0.8rem;
        text-align: center;
        color: #d3d3d3;
      }
      ul {
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 1rem;
        li {
          a {
            color: #9e9e9e;
            font-size: 0.9rem;
            transition: all 0.17s ease-in;
            &:hover {
              color: $white;
            }
            i.footer-icon {
              margin-right: 0.8rem;
            }
          }
        }
      }
    }
  }
  section#sub-footer {
    padding: $footer-padding;
    background: $darker;
    text-align: center;
  }
}

@media screen and (max-width: 720px) {
  $footer-padding: 1rem 40px;

  footer#footer {
    position: relative;
    section#main-footer {
      padding: $footer-padding;
      padding-top: 2rem;
      background: $dark;
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
    }
  }
}
</style>
